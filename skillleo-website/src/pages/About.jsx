import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, CheckCircle, Zap, Target, Users, Star } from 'lucide-react';
import TrustSection from '../components/TrustSection';
import { useCounter } from '../hooks/useCounter';
import logoIconBlue from '../assets/logo-icon-blue.webp';

const TEAM_ROLES = [
  'Laravel Developer', 'React Developer', 'Flutter Developer', 'AI Engineer',
  'UI/UX Designer', 'SEO Expert', 'DevOps Engineer', 'Node.js Developer',
  'Python Developer', 'React Native Developer', 'Database Architect', 'QA Lead',
  'Project Manager', 'Scrum Master', 'API Specialist', 'Cloud Engineer',
  'Digital Marketer', 'Content Strategist', 'Technical Writer', 'Solution Architect',
];

const MILESTONES = [
  { year: '2018', title: 'Company Founded', desc: 'SkillLeo established in Sargodha, Punjab with a vision to deliver world-class software globally.' },
  { year: '2019', title: 'SECP Registration', desc: 'Officially incorporated as SMC-Private Limited under Companies Act 2017 with SECP.' },
  { year: '2020', title: 'PSEB Certification', desc: 'Earned PSEB certification — Pakistan\'s top IT export board recognition.' },
  { year: '2021', title: '100+ Clients Milestone', desc: 'Crossed 100 satisfied international clients across USA, UK, and Australia.' },
  { year: '2022', title: 'AI & SaaS Expansion', desc: 'Launched AI automation division and delivered first enterprise SaaS platform.' },
  { year: '2023', title: '500+ Projects', desc: 'Surpassed 500 projects delivered across 40+ countries.' },
  { year: '2024', title: 'Global Expansion', desc: 'Expanded to 50+ countries. Became a preferred partner for US & European enterprises.' },
  { year: '2025+', title: 'The Future', desc: 'Building the next generation of AI-powered digital products for global markets.' },
];

const VALUES = [
  { icon: Zap, title: 'Speed', desc: 'We move fast without sacrificing quality. Rapid prototyping, agile delivery, always ahead of deadlines.' },
  { icon: Star, title: 'Quality', desc: 'Every line of code is reviewed. Every pixel is intentional. We accept nothing less than excellence.' },
  { icon: Target, title: 'Transparency', desc: 'Weekly updates, milestone-based billing, and direct team access. No surprises, ever.' },
  { icon: Users, title: 'Innovation', desc: 'We stay at the frontier of technology — AI, emerging frameworks, and cutting-edge practices.' },
];

function StatBanner() {
  const [c1, r1] = useCounter(500);
  const [c2, r2] = useCounter(1000);
  const [c3, r3] = useCounter(50);
  const [c4, r4] = useCounter(6);

  return (
    <div ref={r1} className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl p-6
      bg-blue-600 text-white"
    >
      {[
        { ref: r1, val: c1, label: 'Clients', suffix: '+' },
        { ref: r2, val: c2, label: 'Projects', suffix: '+' },
        { ref: r3, val: c3, label: 'Countries', suffix: '+' },
        { ref: r4, val: c4, label: 'Years', suffix: '+' },
      ].map(s => (
        <div key={s.label} className="text-center">
          <div className="font-heading text-3xl font-black">{s.val}{s.suffix}</div>
          <div className="text-sm text-blue-200">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[600px] h-[400px] rounded-full top-0 right-1/4 blur-[120px] bg-gradient-radial from-blue-600/10 to-transparent" />
          <div className="absolute inset-0 dot-grid opacity-25" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400 mb-4">About SkillLeo</div>
            <h1 className="font-heading text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-50 mb-6 leading-tight">
              Built in Pakistan.<br />
              <span className="gradient-text">Trusted Worldwide.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We are a certified software development company delivering world-class digital solutions from Sargodha, Pakistan to clients across 50+ countries.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <StatBanner />
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400 mb-4">Our Story</div>
              <h2 className="font-heading text-4xl font-black text-slate-900 dark:text-slate-50 mb-6">
                Pakistan's Most Trusted Software House
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>SkillLeo (SMC-Private) Limited was founded with a singular mission: to prove that world-class software could be built from Pakistan and delivered to global clients at a fraction of Western rates — without compromising on quality.</p>
                <p>Since 2018, we have grown from a small team of passionate developers to a 25+ person operation serving Fortune 500 suppliers, funded startups, government departments, and solo entrepreneurs across 50+ countries.</p>
                <p>Our SECP incorporation and PSEB certification aren't just badges — they represent our commitment to operating as a legitimate, trustworthy business partner for international clients who demand accountability.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden
                bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-600/5 dark:to-violet-600/5
                border border-blue-200 dark:border-blue-600/15 p-8"
            >
              <div className="space-y-4">
                {[
                  { label: 'Founded', value: '2018', icon: '📅' },
                  { label: 'Headquarters', value: 'Sargodha, Punjab, Pakistan', icon: '📍' },
                  { label: 'Legal Entity', value: 'SMC-Private Limited', icon: '🏢' },
                  { label: 'SECP Reg.', value: 'Inc. 0330718', icon: '🛡' },
                  { label: 'PSEB Reg.', value: 'Z-25-19355/26', icon: '✦' },
                  { label: 'FBR NTN', value: 'I750441', icon: '📋' },
                  { label: 'Email', value: 'skilleopvt@gmail.com', icon: '✉️' },
                  { label: 'Website', value: 'skillleo.com', icon: '🌐' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3 py-3 border-b border-slate-200 dark:border-white/[0.05] last:border-0">
                    <span className="text-base">{item.icon}</span>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-500 w-28 shrink-0">{item.label}</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start gap-8 p-8 sm:p-10 rounded-2xl
              bg-white dark:bg-white/[0.03]
              border border-slate-200 dark:border-white/[0.07]
              shadow-xl dark:shadow-none"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white text-2xl font-black font-heading shrink-0">
              HM
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400 mb-2">Leadership</div>
              <h3 className="font-heading text-2xl font-black text-slate-900 dark:text-slate-50 mb-1">Hassam Mehmood</h3>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">CEO & Founder, SkillLeo (SMC-Private) Limited</div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                Hassam founded SkillLeo with a vision to build Pakistan's first globally recognized software development company. With deep expertise in full-stack development, AI integration, and enterprise architecture, he leads a team of 25+ experts delivering products that compete with the world's best. Under his leadership, SkillLeo has become a go-to partner for clients across the USA, UK, Australia, Germany, and 46 other countries.
              </p>
              <div className="flex gap-3 mt-5 flex-wrap">
                {['Full-Stack Expert', 'AI Strategy', 'Enterprise Architecture', 'Team Leadership'].map(t => (
                  <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full
                    bg-blue-50 dark:bg-blue-600/10 text-blue-700 dark:text-blue-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team roles */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400 mb-4">Our Team</div>
            <h2 className="font-heading text-4xl font-black text-slate-900 dark:text-slate-50 mb-3">
              25+ Experts. One Vision.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              A world-class team covering every aspect of modern software development.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2.5"
          >
            {TEAM_ROLES.map((role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="px-4 py-2 rounded-full text-sm font-medium
                  bg-slate-100 dark:bg-white/[0.04]
                  border border-slate-200 dark:border-white/[0.07]
                  text-slate-700 dark:text-slate-300
                  hover:bg-blue-50 dark:hover:bg-blue-600/10
                  hover:text-blue-700 dark:hover:text-blue-400
                  hover:border-blue-200 dark:hover:border-blue-600/20
                  transition-all duration-200 cursor-default"
              >
                {role}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400 mb-4">Milestones</div>
            <h2 className="font-heading text-4xl font-black text-slate-900 dark:text-slate-50">Our Journey</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/50 via-blue-400/30 to-transparent" />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={`flex gap-6 sm:gap-0 items-start ${i % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
                >
                  <div className={`hidden sm:block flex-1 ${i % 2 === 0 ? 'text-left pl-10' : 'text-right pr-10'}`}>
                    <span className="font-heading text-3xl font-black text-blue-600 dark:text-blue-400">{m.year}</span>
                  </div>
                  <div className="w-16 flex-shrink-0 flex justify-center mt-1 relative z-10">
                    <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-[#0A0A0F] shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
                  </div>
                  <div className={`flex-1 pb-8 ${i % 2 === 0 ? 'sm:text-right sm:pr-10' : 'sm:pl-10'}`}>
                    <span className="sm:hidden font-heading text-xl font-black text-blue-600 dark:text-blue-400 block mb-1">{m.year}</span>
                    <div className="rounded-xl p-5 bg-white dark:bg-white/[0.025] border border-slate-200 dark:border-white/[0.06] shadow-sm">
                      <h4 className="font-heading font-bold text-slate-900 dark:text-slate-50 mb-1">{m.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{m.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400 mb-4">Core Values</div>
            <h2 className="font-heading text-4xl font-black text-slate-900 dark:text-slate-50">What Drives Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl text-center
                  bg-white dark:bg-white/[0.025]
                  border border-slate-200 dark:border-white/[0.07]
                  hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-600/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={22} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 dark:text-slate-50 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-4xl font-black text-slate-900 dark:text-slate-50 mb-4">
              Ready to Partner with SkillLeo?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-8">
              Join 500+ companies that trust us to build their digital future.
            </p>
            <Link to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base
                transition-all duration-200 glow-blue glow-blue-hover">
              Start a Conversation <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
