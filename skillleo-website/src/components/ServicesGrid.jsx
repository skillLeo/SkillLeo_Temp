import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, Database, Code2, Bot, Brain,
  Smartphone, LayoutDashboard, Filter,
  Wrench, ArrowUpRight
} from 'lucide-react';

/* ─── Services data ─── */
const SERVICES = [
  {
    icon: Globe,
    title: 'React, Next.js & TypeScript',
    desc: 'Blazing-fast web applications built with modern React ecosystem. Server-side rendering, ISR, edge functions, and pixel-perfect UIs at any scale.',
    tags: ['React 18', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vite'],
    color: 'blue',
    size: 'lg', // spans 2 cols
  },
  {
    icon: Code2,
    title: 'Laravel & PHP Development',
    desc: 'Robust backend systems and APIs powering enterprise applications worldwide. Filament, Livewire, multi-tenancy.',
    tags: ['Laravel 11', 'PHP 8.x', 'Livewire', 'Filament', 'REST / GraphQL'],
    color: 'red',
    size: 'sm',
  },
  {
    icon: Database,
    title: 'MERN Stack',
    desc: 'End-to-end JavaScript from database to UI. Real-time apps, microservices, WebSockets, and high-traffic APIs.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
    color: 'emerald',
    size: 'sm',
  },
  {
    icon: Bot,
    title: 'AI Automation & Integration',
    desc: 'Intelligent workflows that replace manual work. Integrate OpenAI, Claude, Gemini, and custom agents into any business process.',
    tags: ['OpenAI GPT-4o', 'Claude API', 'LangChain', 'n8n', 'Python'],
    color: 'violet',
    size: 'sm',
  },
  {
    icon: Brain,
    title: 'AI Model Training & Fine-Tuning',
    desc: 'Custom LLMs and ML models trained on your proprietary data. Fine-tuned for your exact domain and use case.',
    tags: ['Fine-tuning', 'HuggingFace', 'PyTorch', 'Vector DBs', 'RAG'],
    color: 'violet',
    size: 'sm',
  },
  {
    icon: Filter,
    title: 'Data Scraping & ETL Pipelines',
    desc: 'Large-scale structured data extraction from any source. Clean, transform, and deliver data exactly where you need it.',
    tags: ['Scrapy', 'Playwright', 'Python', 'Apache Airflow', 'BigQuery'],
    color: 'amber',
    size: 'sm',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile apps for iOS and Android with native performance. From concept to App Store launch.',
    tags: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
    color: 'cyan',
    size: 'lg',
  },
  {
    icon: LayoutDashboard,
    title: 'SaaS & CRM Platforms',
    desc: 'Production-grade multi-tenant SaaS with billing, role management, analytics, and everything a modern B2B product needs.',
    tags: ['Multi-tenancy', 'Stripe', 'Auth0', 'AWS', 'Custom CRM'],
    color: 'blue',
    size: 'sm',
  },
  {
    icon: Wrench,
    title: 'Custom AI Tools',
    desc: 'Bespoke AI-powered internal tools — chatbots, document analysis, knowledge bases, and intelligent dashboards.',
    tags: ['GPT-4o', 'Claude', 'Embeddings', 'Pinecone', 'Next.js'],
    color: 'emerald',
    size: 'sm',
  },
];

/* ─── Color map ─── */
const C = {
  blue:    { icon:'bg-blue-50   dark:bg-blue-600/10   text-blue-600  dark:text-blue-400',   tag:'bg-blue-50   dark:bg-blue-600/10   text-blue-700  dark:text-blue-300',   dot:'bg-blue-600',   glow:'hover:shadow-blue-500/8'   },
  red:     { icon:'bg-red-50    dark:bg-red-600/10    text-red-600   dark:text-red-400',    tag:'bg-red-50    dark:bg-red-600/10    text-red-700   dark:text-red-300',    dot:'bg-red-600',    glow:'hover:shadow-red-500/8'    },
  emerald: { icon:'bg-emerald-50 dark:bg-emerald-600/10 text-emerald-600 dark:text-emerald-400', tag:'bg-emerald-50 dark:bg-emerald-600/10 text-emerald-700 dark:text-emerald-300', dot:'bg-emerald-600', glow:'hover:shadow-emerald-500/8' },
  violet:  { icon:'bg-violet-50 dark:bg-violet-600/10  text-violet-600 dark:text-violet-400', tag:'bg-violet-50 dark:bg-violet-600/10  text-violet-700 dark:text-violet-300', dot:'bg-violet-600', glow:'hover:shadow-violet-500/8'  },
  amber:   { icon:'bg-amber-50  dark:bg-amber-600/10   text-amber-600 dark:text-amber-400',  tag:'bg-amber-50  dark:bg-amber-600/10   text-amber-700  dark:text-amber-300',  dot:'bg-amber-500',  glow:'hover:shadow-amber-500/8'  },
  cyan:    { icon:'bg-cyan-50   dark:bg-cyan-600/10    text-cyan-600  dark:text-cyan-400',   tag:'bg-cyan-50   dark:bg-cyan-600/10    text-cyan-700   dark:text-cyan-300',   dot:'bg-cyan-600',   glow:'hover:shadow-cyan-500/8'   },
};

function ServiceCard({ icon: Icon, title, desc, tags, color, size, index }) {
  const [hov, setHov] = useState(false);
  const c = C[color] || C.blue;
  const isLg = size === 'lg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`bento-card group relative flex flex-col p-6 sm:p-7
        ${isLg ? 'sm:col-span-2' : ''}
        ${c.glow}
        hover:shadow-2xl hover:-translate-y-1`}
    >
      {/* Gradient top border on hover */}
      <div className="absolute top-0 inset-x-8 h-px rounded-full
        bg-gradient-to-r from-transparent via-blue-500/40 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 shrink-0
        transition-transform duration-200 group-hover:scale-110 ${c.icon}`}>
        <Icon size={20} strokeWidth={1.75} />
      </div>

      <h3 className="font-heading font-bold text-slate-900 dark:text-white text-[1.05rem] mb-2.5 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-5">
        {desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {tags.map(t => (
          <span key={t}
            className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${c.tag}`}>
            {t}
          </span>
        ))}
      </div>

      {/* Footer link */}
      <Link to="/services"
        className={`flex items-center gap-1.5 text-xs font-semibold
          opacity-0 group-hover:opacity-100 transition-opacity duration-200
          ${c.icon.split(' ').filter(x => x.startsWith('text-')).join(' ')}`}
      >
        Learn more <ArrowUpRight size={12} />
      </Link>
    </motion.div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="section bg-[#FAFAFA] dark:bg-[#080810]">
      <div className="wrap">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="overline mb-4">What We Build</div>
          <h2 className="font-heading font-black text-[2.6rem] lg:text-[3.2rem]
            text-slate-900 dark:text-white mb-4">
            Full-Spectrum Software
            <br />
            <span className="text-gradient">Development Services</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            From React frontends to AI-powered backends — we build the complete stack for ambitious global companies.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link to="/services" className="btn-primary text-base h-12 px-8 gap-2">
            Explore All Services
            <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
