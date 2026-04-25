import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Load .env manually for server-side use (not exposed to browser)
function loadEnv() {
  try {
    const envPath = resolve(process.cwd(), '.env');
    const raw = readFileSync(envPath, 'utf-8');
    const env = {};
    raw.split('\n').forEach(line => {
      const [k, ...v] = line.split('=');
      if (k && k.trim()) env[k.trim()] = v.join('=').trim();
    });
    return env;
  } catch { return {}; }
}

// ── Email API plugin (dev server only) ──────────────────────────────────────
function emailApiPlugin() {
  const env = loadEnv();

  return {
    name: 'skillleo-email-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');

        if (req.method === 'OPTIONS') {
          res.statusCode = 200; res.end(); return;
        }
        if (req.method !== 'POST') {
          res.statusCode = 405; res.end(JSON.stringify({ error: 'Method not allowed' })); return;
        }

        // Read body
        let raw = '';
        for await (const chunk of req) raw += chunk;

        try {
          const data = JSON.parse(raw || '{}');
          const { name, email, phone, country, service, budget, message } = data;

          if (!name || !email || !message) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Name, email and message are required.' }));
            return;
          }

          // Lazy-load nodemailer (server-side only — never in browser bundle)
          const nodemailer = (await import('nodemailer')).default;

          const transporter = nodemailer.createTransport({
            host:   env.MAIL_HOST || 'smtp.hostinger.com',
            port:   parseInt(env.MAIL_PORT || '465'),
            secure: true,
            auth: {
              user: env.MAIL_USER || 'contact@skillleo.com',
              pass: env.MAIL_PASS || '',
            },
          });

          const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Inter', Arial, sans-serif; color: #1e293b; background: #f8fafc; margin:0; padding:0; }
    .wrap { max-width: 580px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 28px 32px; }
    .header h1 { color: #fff; font-size: 20px; font-weight: 700; margin: 0; }
    .header p { color: rgba(255,255,255,0.8); font-size: 13px; margin: 4px 0 0; }
    .body { padding: 28px 32px; }
    .row { display: flex; gap: 8px; margin-bottom: 14px; }
    .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8; width: 120px; shrink: 0; padding-top: 2px; }
    .value { font-size: 14px; color: #1e293b; flex: 1; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; margin-top: 16px; }
    .message-box p { font-size: 14px; color: #475569; line-height: 1.6; margin: 0; }
    .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 32px; text-align: center; }
    .footer p { font-size: 12px; color: #94a3b8; margin: 0; }
    .badge { display: inline-block; background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 9999px; margin-right: 4px; }
  </style>
</head>
<body>
<div class="wrap">
  <div class="header">
    <h1>New Project Inquiry</h1>
    <p>Received via skillleo.com contact form</p>
  </div>
  <div class="body">
    <div class="row"><div class="label">Name</div><div class="value"><strong>${name}</strong></div></div>
    <div class="row"><div class="label">Email</div><div class="value"><a href="mailto:${email}" style="color:#2563eb">${email}</a></div></div>
    ${phone ? `<div class="row"><div class="label">Phone</div><div class="value">${phone}</div></div>` : ''}
    ${country ? `<div class="row"><div class="label">Country</div><div class="value">${country}</div></div>` : ''}
    ${service ? `<div class="row"><div class="label">Service</div><div class="value"><span class="badge">${service}</span></div></div>` : ''}
    ${budget ? `<div class="row"><div class="label">Budget</div><div class="value">${budget}</div></div>` : ''}
    <div class="message-box">
      <p><strong>Message:</strong><br/><br/>${message.replace(/\n/g, '<br/>')}</p>
    </div>
  </div>
  <div class="footer"><p>SkillLeo (SMC-Private) Limited &nbsp;·&nbsp; SECP Inc. 0330718 &nbsp;·&nbsp; PSEB Z-25-19355/26</p></div>
</div>
</body>
</html>`;

          await transporter.sendMail({
            from:    `"SkillLeo Website" <${env.MAIL_FROM || 'contact@skillleo.com'}>`,
            to:      env.MAIL_USER || 'contact@skillleo.com',
            replyTo: email,
            subject: `New Inquiry — ${name} from ${country || 'Unknown'} (${service || 'General'})`,
            html,
          });

          // Auto-reply to client
          await transporter.sendMail({
            from:    `"SkillLeo" <${env.MAIL_FROM || 'contact@skillleo.com'}>`,
            to:      email,
            subject: `We received your inquiry — SkillLeo`,
            html: `
<!DOCTYPE html><html><head>
<style>
  body { font-family: Arial, sans-serif; color: #1e293b; margin: 0; padding: 0; background: #f8fafc; }
  .wrap { max-width: 520px; margin: 32px auto; background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; }
  .header { background: linear-gradient(135deg,#2563eb,#7c3aed); padding: 28px 32px; }
  .header h1 { color:#fff; font-size:18px; font-weight:700; margin:0; }
  .body { padding: 28px 32px; }
  .body p { font-size:14px; color:#475569; line-height:1.7; margin:0 0 12px; }
  .footer { background:#f8fafc; border-top:1px solid #e2e8f0; padding:14px 32px; text-align:center; }
  .footer p { font-size:11px; color:#94a3b8; margin:0; }
</style>
</head><body>
<div class="wrap">
  <div class="header"><h1>Thank you, ${name}!</h1></div>
  <div class="body">
    <p>We have received your inquiry and our team will get back to you within <strong>2 business hours</strong>.</p>
    <p>In the meantime, feel free to reach us directly:</p>
    <p>📧 <a href="mailto:contact@skillleo.com" style="color:#2563eb">contact@skillleo.com</a><br/>
       📞 <a href="tel:+923101111571" style="color:#2563eb">+92 310 111 1571</a></p>
    <p style="margin-top:20px;font-size:13px;color:#94a3b8;">
      SkillLeo (SMC-Private) Limited<br/>
      Sargodha, Punjab, Pakistan<br/>
      SECP Inc. 0330718 &nbsp;·&nbsp; PSEB Z-25-19355/26
    </p>
  </div>
  <div class="footer"><p>Trusted. Certified. Elite.</p></div>
</div>
</body></html>`,
          });

          res.statusCode = 200;
          res.end(JSON.stringify({ ok: true }));
        } catch (err) {
          console.error('[email-api]', err.message);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Failed to send. Please email us directly at contact@skillleo.com' }));
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), emailApiPlugin()],
});
