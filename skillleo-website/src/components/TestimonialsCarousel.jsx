import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const T = [
  {
    name: 'James Richardson',
    role: 'CEO, TechVenture LLC',
    country: 'United States', flag: '🇺🇸',
    service: 'SaaS Platform',
    rating: 5,
    text: 'SkillLeo delivered our SaaS platform weeks ahead of schedule. The React and Node.js code quality exceeded anything we received from US-based agencies at three times the price. They are our permanent development partner now.',
  },
  {
    name: 'Sarah McAllister',
    role: 'Founder, DigitalEdge AU',
    country: 'Australia', flag: '🇦🇺',
    service: 'Web App Development',
    rating: 5,
    text: 'Three projects in — each one delivered flawlessly. Their MERN stack expertise is world-class and their attention to UX detail is extraordinary. SECP and PSEB certification gave us confidence from day one.',
  },
  {
    name: 'Luca Bernardi',
    role: 'CTO, Innovare GmbH',
    country: 'Germany', flag: '🇩🇪',
    service: 'AI Automation',
    rating: 5,
    text: 'The AI automation suite SkillLeo built for our logistics operation saved 45+ hours per week. Their depth in OpenAI and LangChain is genuinely expert-level. I have recommended them to five companies already.',
  },
  {
    name: 'Emma Thompson',
    role: 'Product Manager, StartupHQ',
    country: 'United Kingdom', flag: '🇬🇧',
    service: 'Flutter App',
    rating: 5,
    text: 'Our Flutter app launched on time with a 4.9-star App Store rating. SkillLeo\'s UI craftsmanship is on another level — the animations, the performance, the polish. Absolutely world-class team.',
  },
];

export default function TestimonialsCarousel() {
  const [cur, setCur]     = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCur(c => (c + 1) % T.length), []);
  const prev = useCallback(() => setCur(c => (c - 1 + T.length) % T.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5800);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = T[cur];

  return (
    <section className="section-sm bg-white dark:bg-[#0A0A14]">
      <div className="wrap-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="overline mb-3">Client Testimonials</div>
          <h2 className="font-heading font-black text-3xl lg:text-4xl text-slate-900 dark:text-white">
            Trusted by Leaders Worldwide
          </h2>
        </motion.div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div className="relative min-h-[240px] mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={cur}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl p-8 sm:p-10
                  bg-slate-50 dark:bg-[#0F1117]
                  border border-slate-200 dark:border-white/[0.07]"
              >
                {/* Quote icon + stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-600/10
                    flex items-center justify-center">
                    <Quote size={18} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-[1.05rem] font-medium leading-relaxed
                  text-slate-700 dark:text-slate-200 mb-7 italic">
                  "{t.text}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{t.name}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-500">{t.role}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <div className="text-base">{t.flag} <span className="text-sm text-slate-500">{t.country}</span></div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full
                      bg-blue-50 dark:bg-blue-600/10 text-blue-700 dark:text-blue-400">
                      {t.service}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              {T.map((_, i) => (
                <button key={i} onClick={() => setCur(i)}
                  className={`h-1.5 rounded-full transition-all duration-300
                    ${i === cur ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-300 dark:bg-slate-700'}`} />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev}
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-white/10
                  bg-white dark:bg-white/[0.04] text-slate-500 dark:text-slate-400
                  hover:bg-slate-50 dark:hover:bg-white/[0.07] flex items-center justify-center transition-colors">
                <ChevronLeft size={15} />
              </button>
              <button onClick={next}
                className="w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-700 text-white
                  flex items-center justify-center transition-colors">
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
