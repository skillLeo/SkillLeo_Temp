import { motion } from 'framer-motion';
import { useCounter } from '../hooks/useCounter';

const STATS = [
  { value: 120,  suffix: '+', label: 'Satisfied Clients',    sub: 'Worldwide' },
  { value: 200,  suffix: '+', label: 'Projects Delivered',   sub: 'Across all domains' },
  { value: 50,   suffix: '+', label: 'Countries Served',     sub: 'Global reach' },
  { value: 25,   suffix: '+', label: 'Expert Team Members',  sub: 'Engineers & designers' },
  { value: 6,    suffix: '+', label: 'Years of Excellence',  sub: 'Since 2018' },
];

function StatItem({ value, suffix, label, sub, delay }) {
  const [count, ref] = useCounter(value, 1800);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center py-6 px-4 group"
    >
      <div className="font-heading text-[2.2rem] font-black tracking-tight
        text-slate-900 dark:text-white group-hover:text-gradient transition-all duration-300">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">{label}</div>
      <div className="text-xs text-slate-400 dark:text-slate-600 mt-0.5">{sub}</div>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 dark:border-white/[0.05]
      bg-white dark:bg-[#0A0A14]">

      {/* Subtle top gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r
        from-transparent via-blue-500/30 to-transparent" />

      <div className="wrap">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s, i) => (
            <div key={s.label} className={`relative
              ${i < STATS.length - 1
                ? 'after:hidden lg:after:block after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-px after:bg-slate-100 dark:after:bg-white/[0.04]'
                : ''}`}
            >
              <StatItem {...s} delay={i * 0.07} />
            </div>
          ))}
        </div>
      </div>

      {/* Subtle bottom gradient line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r
        from-transparent via-blue-500/30 to-transparent" />
    </section>
  );
}
