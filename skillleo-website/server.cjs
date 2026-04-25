/**
 * SkillLeo — Production server
 * Serves the Vite build + handles contact form email API
 *
 * Usage:
 *   npm run build
 *   node server.cjs
 */

require('dotenv').config();
const express   = require('express');
const path      = require('path');
const nodemailer = require('nodemailer');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

/* ── Email API ── */
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, country, service, budget, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host:   process.env.MAIL_HOST || 'smtp.hostinger.com',
      port:   parseInt(process.env.MAIL_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.MAIL_USER || 'contact@skillleo.com',
        pass: process.env.MAIL_PASS || '',
      },
    });

    const html = `
<!DOCTYPE html><html><head>
<style>
  body{font-family:Arial,sans-serif;color:#1e293b;background:#f8fafc;margin:0;padding:0}
  .wrap{max-width:580px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0}
  .header{background:linear-gradient(135deg,#2563eb,#7c3aed);padding:28px 32px}
  .header h1{color:#fff;font-size:20px;font-weight:700;margin:0}
  .header p{color:rgba(255,255,255,.8);font-size:13px;margin:4px 0 0}
  .body{padding:28px 32px}
  .row{display:flex;gap:8px;margin-bottom:14px}
  .label{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#94a3b8;width:120px;padding-top:2px}
  .value{font-size:14px;color:#1e293b;flex:1}
  .badge{display:inline-block;background:#eff6ff;color:#2563eb;border:1px solid #bfdbfe;font-size:11px;font-weight:600;padding:3px 10px;border-radius:9999px}
  .msg{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:14px 16px;margin-top:16px}
  .msg p{font-size:14px;color:#475569;line-height:1.6;margin:0}
  .footer{background:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 32px;text-align:center}
  .footer p{font-size:12px;color:#94a3b8;margin:0}
</style></head><body>
<div class="wrap">
  <div class="header"><h1>New Project Inquiry</h1><p>Received via skillleo.com</p></div>
  <div class="body">
    <div class="row"><div class="label">Name</div><div class="value"><strong>${name}</strong></div></div>
    <div class="row"><div class="label">Email</div><div class="value"><a href="mailto:${email}" style="color:#2563eb">${email}</a></div></div>
    ${phone   ? `<div class="row"><div class="label">Phone</div><div class="value">${phone}</div></div>` : ''}
    ${country ? `<div class="row"><div class="label">Country</div><div class="value">${country}</div></div>` : ''}
    ${service ? `<div class="row"><div class="label">Service</div><div class="value"><span class="badge">${service}</span></div></div>` : ''}
    ${budget  ? `<div class="row"><div class="label">Budget</div><div class="value">${budget}</div></div>` : ''}
    <div class="msg"><p><strong>Message:</strong><br/><br/>${message.replace(/\n/g,'<br/>')}</p></div>
  </div>
  <div class="footer"><p>SkillLeo (SMC-Private) Limited · SECP Inc. 0330718 · PSEB Z-25-19355/26</p></div>
</div></body></html>`;

    await transporter.sendMail({
      from:    `"SkillLeo Website" <${process.env.MAIL_FROM || 'contact@skillleo.com'}>`,
      to:      process.env.MAIL_USER || 'contact@skillleo.com',
      replyTo: email,
      subject: `New Inquiry — ${name} from ${country || 'Unknown'} (${service || 'General'})`,
      html,
    });

    // Auto-reply
    await transporter.sendMail({
      from:    `"SkillLeo" <${process.env.MAIL_FROM || 'contact@skillleo.com'}>`,
      to:      email,
      subject: `We received your inquiry — SkillLeo`,
      html: `<!DOCTYPE html><html><head><style>body{font-family:Arial,sans-serif;color:#1e293b;margin:0;padding:0;background:#f8fafc}.wrap{max-width:520px;margin:32px auto;background:#fff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden}.header{background:linear-gradient(135deg,#2563eb,#7c3aed);padding:28px 32px}.header h1{color:#fff;font-size:18px;font-weight:700;margin:0}.body{padding:28px 32px}.body p{font-size:14px;color:#475569;line-height:1.7;margin:0 0 12px}.footer{background:#f8fafc;border-top:1px solid #e2e8f0;padding:14px 32px;text-align:center}.footer p{font-size:11px;color:#94a3b8;margin:0}</style></head><body><div class="wrap"><div class="header"><h1>Thank you, ${name}!</h1></div><div class="body"><p>We have received your inquiry and our team will get back to you within <strong>2 business hours</strong>.</p><p>📧 <a href="mailto:contact@skillleo.com" style="color:#2563eb">contact@skillleo.com</a><br/>📞 +92 310 111 1571</p><p style="margin-top:20px;font-size:13px;color:#94a3b8">SkillLeo (SMC-Private) Limited<br/>Sargodha, Punjab, Pakistan<br/>SECP Inc. 0330718 · PSEB Z-25-19355/26</p></div><div class="footer"><p>Trusted. Certified. Elite.</p></div></div></body></html>`,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('[email]', err.message);
    res.status(500).json({ error: 'Failed to send. Please email us at contact@skillleo.com' });
  }
});

/* ── SPA fallback ── */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`SkillLeo running on http://localhost:${PORT}`);
});
