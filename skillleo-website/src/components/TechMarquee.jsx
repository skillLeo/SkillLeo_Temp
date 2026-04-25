import { motion } from 'framer-motion';

const ROW1 = [
  { name:'React 18',      dot:'#61DAFB' },
  { name:'Next.js 14',    dot:'#FFFFFF' },
  { name:'TypeScript',    dot:'#3178C6' },
  { name:'Laravel 11',    dot:'#FF2D20' },
  { name:'Node.js',       dot:'#8CC84B' },
  { name:'Python',        dot:'#FFD343' },
  { name:'Flutter',       dot:'#54C5F8' },
  { name:'MongoDB',       dot:'#4CAF50' },
  { name:'PostgreSQL',    dot:'#336791' },
  { name:'OpenAI GPT-4o', dot:'#74AA9C' },
  { name:'AWS',           dot:'#FF9900' },
  { name:'Vue.js',        dot:'#42B883' },
];

const ROW2 = [
  { name:'Claude API',    dot:'#C9956A' },
  { name:'React Native',  dot:'#61DAFB' },
  { name:'Docker',        dot:'#2496ED' },
  { name:'Redis',         dot:'#DC382D' },
  { name:'Tailwind CSS',  dot:'#38BDF8' },
  { name:'GraphQL',       dot:'#E10098' },
  { name:'Firebase',      dot:'#FFCA28' },
  { name:'Stripe',        dot:'#635BFF' },
  { name:'Figma',         dot:'#F24E1E' },
  { name:'LangChain',     dot:'#1C7C54' },
  { name:'MySQL',         dot:'#4479A1' },
  { name:'Scrapy',        dot:'#60A839' },
];

function Pill({ name, dot }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-3 mx-2 rounded-xl shrink-0
      bg-white dark:bg-white/[0.03]
      border border-slate-200/80 dark:border-white/[0.05]
      hover:border-slate-300 dark:hover:border-white/10
      hover:scale-105 transition-all duration-200 cursor-default select-none"
    >
      <span className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ background: dot, boxShadow: `0 0 5px ${dot}88` }} />
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

const FADE = 'pointer-events-none absolute top-0 bottom-0 w-28 z-10';

export default function TechMarquee() {
  return (
    <section className="py-16 bg-slate-50/50 dark:bg-[#08080F] overflow-hidden">
      <div className="wrap mb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="overline mb-3">Our Tech Stack</div>
          <h2 className="font-heading font-black text-3xl lg:text-4xl text-slate-900 dark:text-white">
            Technologies We Master
          </h2>
        </motion.div>
      </div>

      {/* Row 1 */}
      <div className="relative mb-3">
        <div className={`${FADE} left-0 bg-gradient-to-r from-slate-50 dark:from-[#08080F] to-transparent`} />
        <div className={`${FADE} right-0 bg-gradient-to-l from-slate-50 dark:from-[#08080F] to-transparent`} />
        <div className="flex overflow-hidden">
          <div className="marquee-fwd">
            {[...ROW1, ...ROW1].map((t, i) => <Pill key={i} {...t} />)}
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative">
        <div className={`${FADE} left-0 bg-gradient-to-r from-slate-50 dark:from-[#08080F] to-transparent`} />
        <div className={`${FADE} right-0 bg-gradient-to-l from-slate-50 dark:from-[#08080F] to-transparent`} />
        <div className="flex overflow-hidden">
          <div className="marquee-rev">
            {[...ROW2, ...ROW2].map((t, i) => <Pill key={i} {...t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
