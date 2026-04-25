import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, BadgeCheck, Building2, FileText, Play } from 'lucide-react';

/* ─── Typing animation ─── */
const WORDS = ['Scale Globally', 'Win New Clients', 'Drive Revenue', 'Innovate Faster'];

function useTyping(words) {
  const [wi, setWi] = useState(0);
  const [txt, setTxt] = useState('');
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[wi];
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, txt.length + 1);
        setTxt(next);
        if (next === word) setTimeout(() => setDel(true), 1800);
      } else {
        const next = word.slice(0, txt.length - 1);
        setTxt(next);
        if (next === '') { setDel(false); setWi(i => (i + 1) % words.length); }
      }
    }, del ? 42 : 78);
    return () => clearTimeout(t);
  }, [txt, del, wi, words]);
  return txt;
}

/* ─── Trust badges ─── */
const BADGES = [
  { icon: ShieldCheck,  label: 'SECP', sub: 'Inc. 0330718',     color: 'blue' },
  { icon: BadgeCheck,   label: 'PSEB', sub: 'Z-25-19355/26',    color: 'emerald' },
  { icon: Building2,    label: 'SMC-Pvt Ltd', sub: 'Companies Act 2017', color: 'violet' },
  { icon: FileText,     label: 'FBR NTN', sub: 'I750441',        color: 'amber' },
];

const BADGE_CLS = {
  blue:    'bg-blue-50/80   dark:bg-blue-600/10  text-blue-700  dark:text-blue-400  border-blue-200  dark:border-blue-600/20',
  emerald: 'bg-emerald-50/80 dark:bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-600/20',
  violet:  'bg-violet-50/80 dark:bg-violet-600/10 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-600/20',
  amber:   'bg-amber-50/80  dark:bg-amber-600/10  text-amber-700  dark:text-amber-400  border-amber-200  dark:border-amber-600/20',
};

/* ─── Floating stat card ─── */
function StatCard() {
  return (
    <motion.div
      className="float w-full max-w-[340px] rounded-2xl overflow-hidden
        bg-[#0C0E1A] border border-white/[0.08]
        shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)]"
    >
      {/* Top bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.05]">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        <span className="ml-auto text-[11px] text-slate-500 tracking-tight">skillleo.com · Projects</span>
      </div>

      <div className="p-4 space-y-3">
        {/* Mini stats */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { l:'Clients',  v:'120+',  c:'#3B82F6' },
            { l:'Projects', v:'200+',  c:'#10B981' },
            { l:'Countries',v:'50+',   c:'#A855F7' },
          ].map(s => (
            <div key={s.l} className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.04] text-center">
              <div className="text-[10px] text-slate-500 mb-1">{s.l}</div>
              <div className="text-lg font-bold" style={{ color: s.c }}>{s.v}</div>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="bg-white/[0.02] rounded-xl p-3 border border-white/[0.03] h-[88px] flex items-end gap-[3px]">
          {[38,60,44,78,52,90,68,84,58,96,72,88].map((h,i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.4 + i * 0.04, duration: 0.55, ease: 'easeOut' }}
              className="flex-1 rounded-sm"
              style={{ background:`linear-gradient(to top, rgba(37,99,235,${0.18+i*0.04}), rgba(59,130,246,0.75))` }}
            />
          ))}
        </div>

        {/* Active projects */}
        {[
          { name:'E-commerce Platform', status:'Live',        dot:'#10B981' },
          { name:'AI Automation Suite', status:'In Progress', dot:'#F59E0B' },
          { name:'SaaS CRM Dashboard',  status:'Review',      dot:'#3B82F6' },
        ].map((p,i) => (
          <div key={i} className="flex items-center gap-2.5 px-3 py-2.5
            bg-white/[0.025] rounded-lg border border-white/[0.03]">
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background:p.dot }} />
            <span className="text-[12px] text-slate-400 flex-1 truncate">{p.name}</span>
            <span className="text-[10px] font-medium text-slate-600">{p.status}</span>
          </div>
        ))}

        {/* Team */}
        <div className="flex items-center justify-between px-1">
          <div className="flex -space-x-2">
            {['#2563EB','#7C3AED','#10B981','#F59E0B','#EF4444'].map((c,i)=>(
              <div key={i}
                className="w-7 h-7 rounded-full border-2 border-[#0C0E1A] flex items-center justify-center text-[9px] font-bold text-white"
                style={{ background:`linear-gradient(135deg, ${c}, ${c}99)` }}>
                {['SM','RD','AE','MM','DM'][i]}
              </div>
            ))}
          </div>
          <span className="text-[11px] text-slate-500">+20 more experts</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const typedText = useTyping(WORDS);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* ── Animated orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-a absolute w-[700px] h-[700px] rounded-full
          bg-gradient-radial from-blue-600/[0.13] to-transparent blur-[90px]
          top-[-10%] left-[10%]" />
        <div className="orb-b absolute w-[550px] h-[550px] rounded-full
          bg-gradient-radial from-violet-600/[0.09] to-transparent blur-[100px]
          bottom-[-5%] right-[5%]" />
        <div className="orb-c absolute w-[380px] h-[380px] rounded-full
          bg-gradient-radial from-blue-500/[0.08] to-transparent blur-[80px]
          top-[55%] left-[55%]" />
      </div>

      {/* ── Dot grid ── */}
      <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />

      {/* ── Radial spotlight behind headline ── */}
      <div className="absolute top-[38%] left-[26%] -translate-x-1/2 -translate-y-1/2
        w-[800px] h-[500px] pointer-events-none
        bg-gradient-radial from-blue-600/[0.11] to-transparent blur-[40px]" />

      {/* ── Content ── */}
      <div className="relative z-10 wrap py-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">

          {/* ───── Left ───── */}
          <div className="flex-1 max-w-[620px]">

            {/* Certified badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full mb-7
                bg-emerald-50 dark:bg-emerald-600/10
                border border-emerald-200 dark:border-emerald-600/20"
            >
              <span className="flex items-center gap-1.5 bg-emerald-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-[pulse_2s_ease-in-out_infinite]" />
                VERIFIED
              </span>
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                SECP & PSEB Certified Company
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-heading font-black leading-[1.03] tracking-[-0.045em] mb-5
                text-[clamp(2.6rem,5.5vw,4.6rem)]"
            >
              <span className="block text-slate-900 dark:text-white">We Build</span>
              <span className="block text-slate-900 dark:text-white">Software That</span>
              <span className="block min-h-[1.1em]">
                <span className="text-gradient">{typedText}</span>
                <span className="blink text-blue-400/50 font-thin">|</span>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 mb-9 max-w-[500px]"
            >
              Pakistan's elite software team of 25+ engineers and designers. Trusted by 120+ international clients across 50+ countries to deliver world-class digital products.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="flex flex-wrap gap-3.5 mb-10"
            >
              <Link to="/contact" className="btn-primary text-base h-12 px-7 gap-2">
                Start a Project
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/portfolio" className="btn-ghost h-12 px-7">
                <Play size={13} className="text-blue-600" />
                View Our Work
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {BADGES.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.42 + i * 0.07 }}
                  className={`shimmer-badge inline-flex items-center gap-2 pl-2.5 pr-3.5 py-2
                    rounded-xl border text-xs font-medium ${BADGE_CLS[b.color]}`}
                >
                  <b.icon size={13} />
                  <div>
                    <div className="font-semibold leading-none">{b.label}</div>
                    <div className="opacity-60 text-[10px] mt-0.5">{b.sub}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ───── Right: floating dashboard ───── */}
          <motion.div
            initial={{ opacity: 0, x: 36, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex justify-center lg:justify-end w-full lg:max-w-[380px]"
          >
            <StatCard />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
