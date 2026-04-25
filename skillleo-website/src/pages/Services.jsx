import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Layers, Code2, Bot, Brain, Smartphone, LayoutDashboard, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

const SERVICES = [
  {
    icon: Globe,
    title: 'Web App Development',
    desc: 'We craft high-performance web applications that scale to millions of users. Using the latest React, Next.js, and modern frontend tooling, we deliver experiences that rival the world\'s best products.',
    techs: ['React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TypeScript', 'Vite'],
    process: ['Discovery & Wireframing', 'UI/UX Design', 'Development & Testing', 'Deployment & Monitoring'],
    color: 'blue',
  },
  {
    icon: Layers,
    title: 'MERN Stack Development',
    desc: 'End-to-end JavaScript applications using MongoDB, Express.js, React, and Node.js. We architect robust, scalable systems from API design to database optimization.',
    techs: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redis', 'Socket.io'],
    process: ['API Architecture', 'Database Design', 'Backend Development', 'Frontend Integration'],
    color: 'emerald',
  },
  {
    icon: Code2,
    title: 'PHP & Laravel Development',
    desc: 'Battle-tested Laravel applications powering complex business logic. From multi-tenant SaaS to high-traffic e-commerce, we deliver PHP solutions that perform.',
    techs: ['Laravel', 'PHP 8.x', 'Livewire', 'Filament', 'REST APIs', 'MySQL'],
    process: ['Requirements Analysis', 'Database Schema', 'Backend Development', 'API Integration'],
    color: 'violet',
  },
  {
    icon: Bot,
    title: 'AI Automation & Integration',
    desc: 'Transform your business with intelligent automation. We integrate OpenAI, Claude, and custom AI models into your existing workflows to save time and scale output.',
    techs: ['OpenAI GPT-4', 'Claude API', 'LangChain', 'Python', 'n8n', 'Zapier'],
    process: ['Workflow Audit', 'AI Strategy', 'Pipeline Development', 'Testing & Optimization'],
    color: 'amber',
  },
  {
    icon: Brain,
    title: 'AI Model Training',
    desc: 'Custom machine learning models trained on your proprietary data. From fine-tuning LLMs to building specialized classification models — we build AI that fits your business.',
    techs: ['PyTorch', 'HuggingFace', 'Fine-tuning', 'Vector DBs', 'MLflow', 'Python'],
    process: ['Data Collection', 'Model Selection', 'Training & Validation', 'Deployment'],
    color: 'rose',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Beautiful, performant mobile applications for iOS and Android. Using Flutter and React Native, we deliver cross-platform apps that feel completely native.',
    techs: ['Flutter', 'React Native', 'iOS (Swift)', 'Android (Kotlin)', 'Firebase', 'REST APIs'],
    process: ['UX Research', 'Prototype & Design', 'Development', 'App Store Launch'],
    color: 'cyan',
  },
  {
    icon: LayoutDashboard,
    title: 'SaaS Platform Development',
    desc: 'End-to-end SaaS platforms built for scale. Multi-tenancy, subscription billing, role management, analytics dashboards — we build everything a SaaS business needs.',
    techs: ['React', 'Node.js', 'Stripe', 'Multi-tenancy', 'Auth0', 'AWS'],
    process: ['Product Scoping', 'Architecture Design', 'MVP Development', 'Scale & Iterate'],
    color: 'blue',
  },
  {
    icon: Lightbulb,
    title: 'Software Consulting & Architecture',
    desc: 'Senior-level technical guidance for teams and companies. Code review, system architecture, tech stack selection, and strategic planning to keep your project on track.',
    techs: ['System Design', 'Code Review', 'Performance Audit', 'API Design', 'CI/CD', 'Cloud'],
    process: ['Technical Audit', 'Architecture Review', 'Recommendations Report', 'Implementation Support'],
    color: 'emerald',
  },
];

const COLOR_MAP = {
  blue: { icon: 'bg-blue-50 dark:bg-blue-600/10 text-blue-600 dark:text-blue-400', tag: 'bg-blue-50 dark:bg-blue-600/10 text-blue-700 dark:text-blue-400', border: 'border-blue-100 dark:border-blue-600/20' },
  emerald: { icon: 'bg-emerald-50 dark:bg-emerald-600/10 text-emerald-600 dark:text-emerald-400', tag: 'bg-emerald-50 dark:bg-emerald-600/10 text-emerald-700 dark:text-emerald-400', border: 'border-emerald-100 dark:border-emerald-600/20' },
  violet: { icon: 'bg-violet-50 dark:bg-violet-600/10 text-violet-600 dark:text-violet-400', tag: 'bg-violet-50 dark:bg-violet-600/10 text-violet-700 dark:text-violet-400', border: 'border-violet-100 dark:border-violet-600/20' },
  amber: { icon: 'bg-amber-50 dark:bg-amber-600/10 text-amber-600 dark:text-amber-400', tag: 'bg-amber-50 dark:bg-amber-600/10 text-amber-700 dark:text-amber-400', border: 'border-amber-100 dark:border-amber-600/20' },
  rose: { icon: 'bg-rose-50 dark:bg-rose-600/10 text-rose-600 dark:text-rose-400', tag: 'bg-rose-50 dark:bg-rose-600/10 text-rose-700 dark:text-rose-400', border: 'border-rose-100 dark:border-rose-600/20' },
  cyan: { icon: 'bg-cyan-50 dark:bg-cyan-600/10 text-cyan-600 dark:text-cyan-400', tag: 'bg-cyan-50 dark:bg-cyan-600/10 text-cyan-700 dark:text-cyan-400', border: 'border-cyan-100 dark:border-cyan-600/20' },
};

function ServiceCard({ icon: Icon, title, desc, techs, process, color, index }) {
  const c = COLOR_MAP[color] || COLOR_MAP.blue;
  return (
    <motion.div
      id={title.toLowerCase().replace(/[^a-z]/g, '-')}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl overflow-hidden bg-white dark:bg-white/[0.025]
        border ${c.border} border-slate-200 dark:border-white/[0.06]
        hover:shadow-xl transition-all duration-300`}
    >
      <div className="p-7 sm:p-8">
        <div className="flex items-start gap-4 mb-5">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${c.icon}`}>
            <Icon size={22} strokeWidth={1.8} />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">{title}</h3>
          </div>
        </div>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">{desc}</p>

        {/* Tech stack */}
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-600 mb-2">Tech Stack</div>
          <div className="flex flex-wrap gap-1.5">
            {techs.map(t => (
              <span key={t} className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${c.tag}`}>{t}</span>
            ))}
          </div>
        </div>

        {/* Process */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-600 mb-3">Our Process</div>
          <div className="grid grid-cols-2 gap-2">
            {process.map((step, i) => (
              <div key={step} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-7 sm:px-8 py-4 border-t border-slate-100 dark:border-white/[0.04]
        bg-slate-50/50 dark:bg-white/[0.01]">
        <Link to="/contact"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
          Hire Us for {title.split(' ')[0]}
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full top-0 left-1/4 blur-[100px] bg-gradient-radial from-blue-600/10 to-transparent" />
          <div className="absolute inset-0 dot-grid opacity-30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400 mb-4">Services</div>
            <h1 className="font-heading text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-50 mb-6 leading-tight">
              Full-Spectrum Software<br />
              <span className="gradient-text">Development Services</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
              From custom web apps to AI-powered automation — we build the digital infrastructure that drives global businesses forward.
            </p>
            <Link to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base
                transition-all duration-200 glow-blue glow-blue-hover">
              Start a Project <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => <ServiceCard key={s.title} {...s} index={i} />)}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-10 sm:p-14
              bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-lg mx-auto">
              We offer free consultations to help you identify the right solution for your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Free Consultation', 'No Obligation', 'Reply in 2 Hours'].map(f => (
                <span key={f} className="flex items-center gap-1.5 text-sm text-white/90">
                  <CheckCircle size={13} className="text-emerald-300" /> {f}
                </span>
              ))}
            </div>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                bg-white hover:bg-blue-50 text-blue-700 font-semibold text-base
                transition-all duration-200 shadow-xl">
              Book a Free Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
