import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logoHLight from '../assets/logo-horizontal-light.png';
import logoHBlue from '../assets/logo-horizontal-blue.png';

const COL = {
  Company: [
    { l:'About Us',     to:'/about' },
    { l:'Our Services', to:'/services' },
    { l:'Portfolio',    to:'/portfolio' },
    { l:'Contact',      to:'/contact' },
  ],
  Services: [
    { l:'Web Development',   to:'/services' },
    { l:'Laravel & PHP',     to:'/services' },
    { l:'AI Automation',     to:'/services' },
    { l:'Mobile Apps',       to:'/services' },
  ],
  Platforms: [
    { l:'Upwork',           href:'https://www.upwork.com' },
    { l:'LinkedIn',         href:'https://www.linkedin.com/in/hassam571/' },
    { l:'Fiverr',           href:'https://www.fiverr.com/s/vvq3wLN' },
    { l:'Direct Contract',  to:'/contact' },
  ],
  Legal: [
    { l:'SECP Inc. 0330718',     to:'#' },
    { l:'PSEB Z-25-19355/26',   to:'#' },
    { l:'FBR NTN: I750441',     to:'#' },
    { l:'SMC-Private Limited',  to:'#' },
  ],
};

export default function Footer() {
  const { isDark } = useTheme();
  const logo = isDark ? logoHLight : logoHBlue;

  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.05]
      bg-white dark:bg-[#07070F]">
      <div className="wrap pt-16 pb-8">

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <img src={logo} alt="SkillLeo" className="h-8 w-auto" />
            <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed max-w-xs">
              Pakistan's most trusted software development company. Certified by SECP and PSEB. Delivering world-class digital products to 50+ countries since 2018.
            </p>
            <div className="flex gap-2 flex-wrap">
              {[
                { l:'SECP Registered', c:'blue' },
                { l:'PSEB Certified',  c:'emerald' },
              ].map(b => (
                <span key={b.l}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
                    ${b.c==='blue'
                      ? 'bg-blue-50 dark:bg-blue-600/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-600/20'
                      : 'bg-emerald-50 dark:bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-600/20'
                    }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${b.c==='blue' ? 'bg-blue-600' : 'bg-emerald-500'}`} />
                  {b.l}
                </span>
              ))}
            </div>
            <div className="space-y-2 pt-1">
              {[
                { Icon:Mail,    val:'contact@skillleo.com',  href:'mailto:contact@skillleo.com' },
                { Icon:Phone,   val:'+92 310 111 1571',       href:'tel:+923101111571' },
                { Icon:MapPin,  val:'Sargodha, Punjab, Pakistan', href:null },
              ].map(item => (
                <div key={item.val} className="flex items-center gap-2">
                  <item.Icon size={13} className="text-slate-400 shrink-0" />
                  {item.href
                    ? <a href={item.href} className="text-sm text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{item.val}</a>
                    : <span className="text-sm text-slate-500 dark:text-slate-500">{item.val}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(COL).map(([group, links]) => (
            <div key={group} className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em]
                text-slate-400 dark:text-slate-600">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.l}>
                    {link.href
                      ? <a href={link.href} target="_blank" rel="noopener noreferrer"
                          className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1">
                          {link.l} <ExternalLink size={10} className="opacity-50" />
                        </a>
                      : <Link to={link.to}
                          className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {link.l}
                        </Link>
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-100 dark:border-white/[0.04]
          flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © 2025 SkillLeo (SMC-Private) Limited. All rights reserved. Registered in Pakistan.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-600 font-medium tracking-wide">
            Trusted. Certified. Elite.
          </p>
        </div>
      </div>
    </footer>
  );
}
