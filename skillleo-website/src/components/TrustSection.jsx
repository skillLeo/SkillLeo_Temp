import { motion } from 'framer-motion';
import { ShieldCheck, BadgeCheck, FileText, ExternalLink, CheckCircle } from 'lucide-react';

const CERTS = [
  {
    Icon: ShieldCheck,
    name: 'SECP',
    full: 'Securities & Exchange Commission of Pakistan',
    number: 'Inc. No. 0330718',
    detail: 'SMC-Private Limited incorporated under Companies Act 2017. The highest level of legal business registration in Pakistan.',
    color: 'blue',
    verify: 'https://www.secp.gov.pk',
  },
  {
    Icon: BadgeCheck,
    name: 'PSEB',
    full: 'Pakistan Software Export Board',
    number: 'Reg. No. Z-25-19355/26',
    detail: 'Certified IT export company recognized by the Government of Pakistan for delivering software services to international markets.',
    color: 'emerald',
    verify: 'https://www.pseb.org.pk',
  },
  {
    Icon: FileText,
    name: 'FBR NTN',
    full: 'Federal Board of Revenue — Pakistan',
    number: 'NTN: I750441',
    detail: 'Active National Tax Number registration. Fully compliant business entity operating under Pakistani federal tax law.',
    color: 'violet',
    verify: '#',
  },
];

const CLR = {
  blue:    { wrap:'border-blue-200  dark:border-blue-600/20',   icon:'bg-blue-50  dark:bg-blue-600/10   text-blue-600  dark:text-blue-400',  badge:'bg-blue-100  dark:bg-blue-600/15 text-blue-800  dark:text-blue-300',  link:'text-blue-600 dark:text-blue-400' },
  emerald: { wrap:'border-emerald-200 dark:border-emerald-600/20', icon:'bg-emerald-50 dark:bg-emerald-600/10 text-emerald-600 dark:text-emerald-400', badge:'bg-emerald-100 dark:bg-emerald-600/15 text-emerald-800 dark:text-emerald-300', link:'text-emerald-600 dark:text-emerald-400' },
  violet:  { wrap:'border-violet-200 dark:border-violet-600/20', icon:'bg-violet-50 dark:bg-violet-600/10  text-violet-600 dark:text-violet-400',  badge:'bg-violet-100 dark:bg-violet-600/15 text-violet-800  dark:text-violet-300',  link:'text-violet-600 dark:text-violet-400' },
};

export default function TrustSection() {
  return (
    <section className="section bg-[#FAFAFA] dark:bg-[#080810]">
      <div className="wrap">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="overline mb-4" style={{ color:'#B45309' }}>
            Official Certifications
          </div>
          <h2 className="font-heading font-black text-[2.4rem] lg:text-[3rem]
            text-slate-900 dark:text-white mb-4">
            Certified. Verified. Trusted.
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            We hold every certification required by international clients, government departments, banks, and investors — before they even ask.
          </p>
        </motion.div>

        {/* Cert cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {CERTS.map((c, i) => {
            const cl = CLR[c.color];
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={`bento-card relative p-7 flex flex-col border ${cl.wrap} hover:shadow-2xl`}
              >
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-0.5 rounded-t-2xl"
                  style={{ background:`linear-gradient(90deg, transparent, currentColor, transparent)` }} />

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${cl.icon}`}>
                  <c.Icon size={22} strokeWidth={1.75} />
                </div>

                <div className="font-heading font-black text-xl text-slate-900 dark:text-white mb-1">{c.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mb-4 leading-relaxed">{c.full}</div>

                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold mb-4 w-fit ${cl.badge}`}>
                  {c.number}
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-5">
                  {c.detail}
                </p>

                <a href={c.verify} target="_blank" rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold ${cl.link} hover:underline`}>
                  Verify Online <ExternalLink size={11} />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Why it matters */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 text-center
            bg-gradient-to-br from-blue-50/80 via-violet-50/40 to-blue-50/80
            dark:from-blue-600/[0.06] dark:via-violet-600/[0.03] dark:to-blue-600/[0.06]
            border border-blue-200/60 dark:border-blue-600/15"
        >
          <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-5">
            These certifications satisfy due diligence requirements for:
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'International Enterprise Contracts',
              'Government & Public Sector Projects',
              'Bank Account & Credit Verification',
              'Investor & Partner Due Diligence',
              'IT Export Compliance',
            ].map(item => (
              <span key={item}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                  bg-white dark:bg-white/[0.04]
                  border border-blue-200/60 dark:border-blue-600/15
                  text-xs font-medium text-slate-700 dark:text-slate-300">
                <CheckCircle size={11} className="text-emerald-500 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
