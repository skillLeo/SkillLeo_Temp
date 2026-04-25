import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const SERVICES = [
  'Web App Development (React / Next.js)',
  'Laravel & PHP Development',
  'MERN Stack Development',
  'AI Automation & Integration',
  'AI Model Training & Fine-Tuning',
  'Data Scraping & ETL Pipelines',
  'Mobile App (Flutter / React Native)',
  'SaaS / CRM Platform Development',
  'Custom AI Tools',
  'Software Consulting & Architecture',
  'Other / Not Sure Yet',
];

const BUDGETS = [
  'Less than $500',
  '$500 – $2,000',
  '$2,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Prefer to discuss with team',
];

const EMPTY = {
  name: '', email: '', phone: '', country: '',
  service: '', budget: '', message: '',
};

export default function ContactForm() {
  const [form,    setForm]    = useState(EMPTY);
  const [status,  setStatus]  = useState('idle'); // idle | sending | success | error
  const [errMsg,  setErrMsg]  = useState('');

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    setErrMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Something went wrong.');

      setStatus('success');
      setForm(EMPTY);
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      setErrMsg(err.message);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 7000);
    }
  };

  const inputCls = `
    w-full h-11 px-4 rounded-xl text-sm
    bg-slate-50 dark:bg-white/[0.04]
    border border-slate-200 dark:border-white/[0.08]
    text-slate-900 dark:text-slate-100
    placeholder-slate-400 dark:placeholder-slate-600
    focus:outline-none
    focus:border-blue-500 dark:focus:border-blue-500
    focus:bg-white dark:focus:bg-white/[0.06]
    focus:ring-2 focus:ring-blue-500/10
    transition-all duration-150`;

  const selectCls = inputCls + ' cursor-pointer appearance-none';

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl p-7 sm:p-8
        bg-white dark:bg-[#0F1119]
        border border-slate-200 dark:border-white/[0.07]
        shadow-xl shadow-slate-200/50 dark:shadow-none"
    >
      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-1">
        Send a Message
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-500 mb-6">
        We reply within 2 business hours, Monday – Saturday.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-500 mb-1.5 uppercase tracking-wide">
            Full Name *
          </label>
          <input
            required name="name" value={form.name} onChange={set}
            placeholder="James Richardson" className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-500 mb-1.5 uppercase tracking-wide">
            Email Address *
          </label>
          <input
            required type="email" name="email" value={form.email} onChange={set}
            placeholder="james@company.com" className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-500 mb-1.5 uppercase tracking-wide">
            Phone / WhatsApp
          </label>
          <input
            name="phone" value={form.phone} onChange={set}
            placeholder="+1 555 000 0000" className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-500 mb-1.5 uppercase tracking-wide">
            Country *
          </label>
          <input
            required name="country" value={form.country} onChange={set}
            placeholder="United States" className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-500 mb-1.5 uppercase tracking-wide">
            Service Required *
          </label>
          <select required name="service" value={form.service} onChange={set} className={selectCls}>
            <option value="">Select a service…</option>
            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-500 mb-1.5 uppercase tracking-wide">
            Project Budget
          </label>
          <select name="budget" value={form.budget} onChange={set} className={selectCls}>
            <option value="">Select a range…</option>
            {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-500 mb-1.5 uppercase tracking-wide">
          Project Details *
        </label>
        <textarea
          required name="message" value={form.message} onChange={set}
          rows={4}
          placeholder="Describe your project — goals, current challenges, timeline, and any specific requirements…"
          className={`${inputCls} h-auto py-3 resize-none leading-relaxed`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'sending' || status === 'success'}
        className="
          group relative w-full overflow-hidden
          h-12 rounded-xl
          bg-blue-600 hover:bg-blue-700 disabled:opacity-75
          text-white font-semibold text-sm
          transition-all duration-200
          shadow-[0_0_0_1px_rgba(37,99,235,0.3),0_4px_14px_rgba(37,99,235,0.25)]
          hover:shadow-[0_0_0_1px_rgba(37,99,235,0.5),0_6px_20px_rgba(37,99,235,0.38)]
          flex items-center justify-center gap-2.5
        "
      >
        {/* Shimmer sweep */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
          -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

        {status === 'sending' && <><Loader2 size={15} className="animate-spin" /> Sending…</>}
        {status === 'success' && <><CheckCircle size={15} /> Message Sent — We'll Reply Soon!</>}
        {(status === 'idle' || status === 'error') && <><Send size={15} /> Send Message</>}
      </button>

      {/* Error */}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 flex items-start gap-2 p-3 rounded-xl
            bg-red-50 dark:bg-red-600/10
            border border-red-200 dark:border-red-600/20
            text-red-700 dark:text-red-400 text-xs"
        >
          <AlertCircle size={13} className="shrink-0 mt-0.5" />
          {errMsg || 'Something went wrong. Please try again or email us directly.'}
        </motion.div>
      )}

      <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-4">
        or email us directly at{' '}
        <a href="mailto:contact@skillleo.com"
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          contact@skillleo.com
        </a>
      </p>
    </motion.form>
  );
}
