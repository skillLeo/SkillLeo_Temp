import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ArrowRight, CheckCircle, Globe, Clock, Eye,
  ExternalLink, Zap, Users, Star, Award
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import ServicesGrid from '../components/ServicesGrid';
import TechMarquee from '../components/TechMarquee';
import WorldMap from '../components/WorldMap';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import TrustSection from '../components/TrustSection';

/* ─── Why choose us ─── */
const WHY = [
  {
    Icon: CheckCircle,
    title: 'Government Certified',
    desc: 'SECP & PSEB registered — the only credentials that matter when international clients run due diligence on your team.',
    color: 'blue',
  },
  {
    Icon: Globe,
    title: 'Truly Global',
    desc: 'From Silicon Valley to Sydney — 50+ countries served and a deep understanding of diverse market requirements.',
    color: 'emerald',
  },
  {
    Icon: Clock,
    title: '98% On-Time Delivery',
    desc: 'Milestone-based project management with weekly progress updates. No surprises — ever.',
    color: 'violet',
  },
  {
    Icon: Eye,
    title: 'Radical Transparency',
    desc: 'Direct access to your development team, shared repositories, live staging environments at every stage.',
    color: 'amber',
  },
];

const WHY_CLS = {
  blue:    'bg-blue-50   dark:bg-blue-600/10   text-blue-600  dark:text-blue-400',
  emerald: 'bg-emerald-50 dark:bg-emerald-600/10 text-emerald-600 dark:text-emerald-400',
  violet:  'bg-violet-50 dark:bg-violet-600/10  text-violet-600 dark:text-violet-400',
  amber:   'bg-amber-50  dark:bg-amber-600/10   text-amber-600  dark:text-amber-400',
};

function WhySection() {
  return (
    <section className="section bg-white dark:bg-[#0A0A14]">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="overline mb-4">Why Choose Us</div>
          <h2 className="font-heading font-black text-[2.4rem] lg:text-[3rem]
            text-slate-900 dark:text-white">
            Why 120+ Clients Choose SkillLeo
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bento-card p-6 hover:shadow-xl"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${WHY_CLS[w.color]}`}>
                <w.Icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-2">{w.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Platforms ─── */
const PLATFORMS = [
  { name:'Upwork',          color:'#14A800', desc:'Top Rated Plus Agency',    icon:'🟢', href:'https://www.upwork.com' },
  { name:'LinkedIn',        color:'#0A66C2', desc:'CEO Profile & Company',    icon:'🔵', href:'https://www.linkedin.com/in/hassam571/' },
  { name:'Fiverr',          color:'#1DBF73', desc:'Verified Level 2 Seller',  icon:'🟣', href:'https://www.fiverr.com/s/vvq3wLN' },
  { name:'Direct Contract', color:'#7C3AED', desc:'Enterprise & Government',  icon:'⚡', href:'/contact' },
];

function PlatformsSection() {
  return (
    <section className="section-sm bg-slate-50 dark:bg-[#08080F]">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <div className="overline mb-4">Find Us On</div>
          <h2 className="font-heading font-black text-3xl lg:text-4xl text-slate-900 dark:text-white mb-3">
            Work With Us — Anywhere
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            From Upwork escrow to direct enterprise contracts — we are accessible on every major professional platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PLATFORMS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target={p.href.startsWith('http') ? '_blank' : undefined}
              rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bento-card flex flex-col items-center gap-3 p-7
                hover:shadow-2xl cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl
                bg-white dark:bg-white/[0.04] shadow-sm border border-slate-100 dark:border-white/[0.05]">
                {p.icon}
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-slate-900 dark:text-white text-sm">{p.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{p.desc}</div>
              </div>
              <div className="w-2 h-2 rounded-full" style={{ background:p.color, boxShadow:`0 0 6px ${p.color}99` }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Team section ─── */
const ROLES = [
  'Laravel Developer','React Developer','Next.js Developer','TypeScript Engineer',
  'Flutter Developer','React Native Dev','AI/ML Engineer','Python Developer',
  'Node.js Developer','DevOps Engineer','UI/UX Designer','Database Architect',
  'SEO Specialist','Digital Marketer','QA Engineer','Solution Architect',
  'Scrum Master','API Specialist','Data Engineer','Technical Writer',
];

function TeamSection() {
  return (
    <section className="section bg-white dark:bg-[#0A0A14]">
      <div className="wrap text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-10"
        >
          <div className="overline mb-4">Our Team</div>
          <h2 className="font-heading font-black text-[2.4rem] lg:text-[3rem] text-slate-900 dark:text-white mb-3">
            25+ Experts.<br className="hidden sm:block" /> One Shared Vision.
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            A world-class team covering every discipline — from AI engineering to pixel-perfect design. Every member is a specialist, not a generalist.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2"
        >
          {ROLES.map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.025 }}
              whileHover={{ scale: 1.04 }}
              className="px-4 py-2 rounded-full text-sm font-medium cursor-default select-none
                bg-slate-100 dark:bg-white/[0.04]
                border border-slate-200 dark:border-white/[0.07]
                text-slate-700 dark:text-slate-300
                hover:bg-blue-50 dark:hover:bg-blue-600/10
                hover:text-blue-700 dark:hover:text-blue-400
                hover:border-blue-200 dark:hover:border-blue-600/20
                transition-all duration-200"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CTA banner ─── */
function CTABanner() {
  return (
    <section className="section">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl px-8 py-16 sm:px-16 sm:py-20 text-center
            bg-gradient-to-br from-blue-600 via-[#1E40AF] to-violet-700"
        >
          {/* Decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-[500px] h-[500px] rounded-full -top-40 -left-20 blur-[100px] bg-white/5" />
            <div className="absolute w-[400px] h-[400px] rounded-full -bottom-32 -right-16 blur-[80px] bg-white/5" />
            <div className="absolute inset-0 dot-grid opacity-10" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                bg-white/10 border border-white/20 mb-6 text-sm font-medium text-white/90"
            >
              <Zap size={13} className="text-amber-300" />
              We typically reply within 2 hours
            </motion.div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
              Ready to Build Something
              <br className="hidden sm:block" /> Extraordinary?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Tell us about your project. SECP & PSEB certified. 120+ satisfied clients in 50+ countries.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                  bg-white hover:bg-blue-50 text-blue-700 font-semibold text-base
                  transition-all duration-200 shadow-2xl shadow-blue-900/30">
                Start Your Project
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                  bg-white/10 hover:bg-white/[0.18] border border-white/20
                  text-white font-medium text-base transition-all duration-200">
                Explore Services
              </Link>
            </div>

            {/* Mini proof */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                { icon: Users, val:'120+ Clients' },
                { icon: Star,  val:'200+ Projects' },
                { icon: Globe, val:'50+ Countries' },
                { icon: Award, val:'SECP & PSEB Certified' },
              ].map(item => (
                <div key={item.val} className="flex items-center gap-1.5 text-white/80 text-sm">
                  <item.icon size={13} className="text-white/60" />
                  {item.val}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SEO page="home" />
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <TechMarquee />
      <WhySection />
      <PlatformsSection />
      <WorldMap />
      <TestimonialsCarousel />
      <TrustSection />
      <TeamSection />
      <CTABanner />
    </>
  );
}
