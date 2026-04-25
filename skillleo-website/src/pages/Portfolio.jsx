import SEO from '../components/SEO';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Globe, Smartphone, Bot, LayoutDashboard, Code2 } from 'lucide-react';

const CATEGORIES = ['All', 'Web', 'Mobile', 'AI', 'SaaS', 'Laravel'];

const PROJECTS = [
  {
    title: 'Enterprise ERP System',
    category: 'SaaS',
    desc: 'Full-scale multi-module ERP for a manufacturing conglomerate in Germany. HR, inventory, invoicing, and reporting.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Docker'],
    country: '🇩🇪 Germany',
    gradient: 'from-blue-600 via-blue-700 to-violet-700',
    icon: LayoutDashboard,
  },
  {
    title: 'AI-Powered LMS Platform',
    category: 'AI',
    desc: 'Intelligent learning management system with AI-generated quizzes, progress tracking, and personalized content delivery.',
    tech: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
    country: '🇺🇸 USA',
    gradient: 'from-violet-600 via-purple-700 to-indigo-700',
    icon: Bot,
  },
  {
    title: 'Real Estate Marketplace',
    category: 'Web',
    desc: 'Full-featured property listing platform with ML-based price prediction, virtual tours, and mortgage calculators.',
    tech: ['Next.js', 'Laravel', 'PostgreSQL', 'AWS'],
    country: '🇦🇺 Australia',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    icon: Globe,
  },
  {
    title: 'Healthcare Mobile App',
    category: 'Mobile',
    desc: 'Patient-doctor appointment system with telemedicine video calls, prescription management, and lab results.',
    tech: ['Flutter', 'Firebase', 'Node.js', 'WebRTC'],
    country: '🇬🇧 United Kingdom',
    gradient: 'from-rose-600 via-pink-600 to-red-600',
    icon: Smartphone,
  },
  {
    title: 'Fintech Dashboard SaaS',
    category: 'SaaS',
    desc: 'B2B financial analytics platform with real-time data visualization, custom reporting, and Stripe billing integration.',
    tech: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    country: '🇨🇦 Canada',
    gradient: 'from-amber-500 via-orange-600 to-red-600',
    icon: LayoutDashboard,
  },
  {
    title: 'AI Chatbot & CRM',
    category: 'AI',
    desc: 'Custom AI sales assistant trained on client product data, integrated with HubSpot CRM and automated email sequences.',
    tech: ['Python', 'Claude API', 'React', 'HubSpot API'],
    country: '🇳🇱 Netherlands',
    gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
    icon: Bot,
  },
  {
    title: 'Multi-vendor E-commerce',
    category: 'Laravel',
    desc: 'Scalable marketplace platform supporting 200+ vendors with individual dashboards, payouts, and analytics.',
    tech: ['Laravel', 'Livewire', 'MySQL', 'Redis'],
    country: '🇦🇪 UAE',
    gradient: 'from-violet-600 via-fuchsia-600 to-pink-600',
    icon: Code2,
  },
  {
    title: 'Fleet Management System',
    category: 'Web',
    desc: 'Real-time vehicle tracking, maintenance scheduling, driver management, and fuel analytics for a logistics company.',
    tech: ['React', 'Node.js', 'Google Maps API', 'MongoDB'],
    country: '🇸🇦 Saudi Arabia',
    gradient: 'from-slate-600 via-slate-700 to-slate-800',
    icon: Globe,
  },
];

function ProjectCard({ title, category, desc, tech, country, gradient, icon: Icon, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group rounded-2xl overflow-hidden bg-white dark:bg-white/[0.025]
        border border-slate-200 dark:border-white/[0.06]
        hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className={`relative h-44 bg-gradient-to-br ${gradient} overflow-hidden`}>
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 5 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <Icon size={48} className="text-white/30" strokeWidth={1} />
          </motion.div>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white border border-white/20">
            {category}
          </span>
        </div>
        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/20 flex items-center justify-center"
        >
          <div className="flex items-center gap-2 text-white text-sm font-medium">
            <ExternalLink size={14} /> View Project
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading font-bold text-slate-900 dark:text-slate-50 text-base">{title}</h3>
          <span className="text-sm">{country}</span>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {tech.map(t => (
            <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded-full
              bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[400px] rounded-full top-0 left-1/3 blur-[120px] bg-gradient-radial from-violet-600/10 to-transparent" />
          <div className="absolute inset-0 dot-grid opacity-25" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400 mb-4">Our Work</div>
            <h1 className="font-heading text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-50 mb-6">
              1,000+ Projects.<br />
              <span className="gradient-text">Delivered Globally.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A selection of our recent work across web, mobile, AI, and SaaS for clients in 50+ countries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2 justify-center mb-10"
          >
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.title} {...project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* More projects note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 py-8 border-t border-slate-200 dark:border-white/[0.06]"
          >
            <p className="text-slate-500 dark:text-slate-500 text-sm mb-4">
              This is a small selection. We have delivered 1,000+ projects across all categories.
            </p>
            <Link to="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm
                transition-all duration-200 glow-blue glow-blue-hover">
              Discuss Your Project <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-white/[0.01]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-black text-slate-900 dark:text-slate-50 mb-4">
              Clients Across 50+ Countries
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {['🇺🇸 USA','🇨🇦 Canada','🇬🇧 UK','🇦🇺 Australia','🇩🇪 Germany','🇫🇷 France','🇳🇱 Netherlands','🇦🇪 UAE','🇸🇦 Saudi Arabia','🇸🇬 Singapore','🇮🇳 India','🇵🇰 Pakistan'].map(c => (
                <span key={c} className="px-4 py-2 rounded-full text-sm
                  bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.07]
                  text-slate-700 dark:text-slate-300">
                  {c}
                </span>
              ))}
              <span className="px-4 py-2 rounded-full text-sm font-medium
                bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-600/20
                text-blue-700 dark:text-blue-400">
                + 38 more
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
