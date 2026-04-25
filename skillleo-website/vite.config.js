import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function loadEnv() {
  try {
    const raw = readFileSync(resolve(process.cwd(), '.env'), 'utf-8');
    return Object.fromEntries(
      raw.split('\n').filter(Boolean).map(l => { const [k,...v]=l.split('='); return [k.trim(), v.join('=').trim()]; })
    );
  } catch { return {}; }
}

function emailApiPlugin() {
  const env = loadEnv();
  return {
    name: 'skillleo-email-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (req.method === 'OPTIONS') { res.statusCode = 200; res.end(); return; }
        if (req.method !== 'POST') { res.statusCode = 405; res.end(JSON.stringify({ error: 'Method not allowed' })); return; }
        let raw = '';
        for await (const chunk of req) raw += chunk;
        try {
          const { name, email, phone, country, service, budget, message } = JSON.parse(raw || '{}');
          if (!name || !email || !message) { res.statusCode = 400; res.end(JSON.stringify({ error: 'Name, email and message are required.' })); return; }
          const nodemailer = (await import('nodemailer')).default;
          const transporter = nodemailer.createTransport({ host: env.MAIL_HOST||'smtp.hostinger.com', port: parseInt(env.MAIL_PORT||'465'), secure: true, auth: { user: env.MAIL_USER||'contact@skillleo.com', pass: env.MAIL_PASS||'' } });
          await transporter.sendMail({ from: `"SkillLeo Website" <${env.MAIL_FROM||'contact@skillleo.com'}>`, to: env.MAIL_USER||'contact@skillleo.com', replyTo: email, subject: `New Inquiry — ${name} from ${country||'Unknown'} (${service||'General'})`, html: `<p><b>${name}</b> (${email})<br/>${phone||''} | ${country||''} | ${service||''} | ${budget||''}</p><p>${message}</p>` });
          await transporter.sendMail({ from: `"SkillLeo" <${env.MAIL_FROM||'contact@skillleo.com'}>`, to: email, subject: 'We received your inquiry — SkillLeo', html: `<p>Thank you ${name}! We'll reply within 2 business hours.</p><p>SkillLeo · contact@skillleo.com · +92 310 111 1571</p>` });
          res.statusCode = 200; res.end(JSON.stringify({ ok: true }));
        } catch (err) { console.error('[email-api]', err.message); res.statusCode = 500; res.end(JSON.stringify({ error: 'Failed to send.' })); }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), emailApiPlugin()],

  build: {
    // Raise warning threshold — chunks split below will be <500KB
    chunkSizeWarningLimit: 600,

    // Use Vite 8 default oxc minifier (esbuild no longer bundled)
    minify: true,

    // Target modern browsers only — smaller output, faster parse
    target: ['es2020', 'chrome90', 'firefox88', 'safari14'],

    // Inline small assets (< 4KB) as base64 to save HTTP round-trips
    assetsInlineLimit: 4096,

    rollupOptions: {
      output: {
        // ── Manual chunk splitting ──────────────────────────────────
        manualChunks(id) {
          // React core — loads first, cached longest
          if (id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/scheduler/')) {
            return 'vendor-react';
          }
          // React Router
          if (id.includes('node_modules/react-router') ||
              id.includes('node_modules/@remix-run')) {
            return 'vendor-router';
          }
          // Framer Motion — heavy, lazy-loaded pages pull it in separately
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }
          // Lucide icons
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          // Leaflet + react-leaflet — only used on one page (WorldMap)
          if (id.includes('node_modules/leaflet') ||
              id.includes('node_modules/react-leaflet') ||
              id.includes('node_modules/@react-leaflet')) {
            return 'vendor-leaflet';
          }
          // React Query
          if (id.includes('node_modules/@tanstack')) {
            return 'vendor-query';
          }
          // React Helmet
          if (id.includes('node_modules/react-helmet')) {
            return 'vendor-helmet';
          }
        },

        // Content-hash filenames → safe 1-year cache on CDN/browser
        entryFileNames:  'assets/[name]-[hash].js',
        chunkFileNames:  'assets/[name]-[hash].js',
        assetFileNames:  'assets/[name]-[hash][extname]',
      },
    },

    // Source maps off in production (saves bandwidth)
    sourcemap: false,

    // CSS code splitting — each lazy-loaded chunk gets its own CSS
    cssCodeSplit: true,
  },

  // Pre-bundle deps for dev mode — leaflet must be included (not excluded)
  // so Vite converts its CommonJS exports to ESM; manualChunks handles
  // production code-splitting separately.
  optimizeDeps: {
    include: [
      'react', 'react-dom', 'react-router-dom',
      'framer-motion', 'lucide-react',
      'leaflet', 'react-leaflet',
    ],
  },
});
