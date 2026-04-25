import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import logoIconBlue from '../assets/logo-icon-blue.webp';
import logoIconDark from '../assets/logo-icon-dark.webp';

const LINKS = [
  { label: 'Home',      path: '/' },
  { label: 'Services',  path: '/services' },
  { label: 'About',     path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact',   path: '/contact' },
];

export default function Navbar() {
  const { isDark } = useTheme();
  const { pathname } = useLocation();
  const [scrolled,  setScrolled]  = useState(false);
  const [visible,   setVisible]   = useState(true);
  const [mobile,    setMobile]    = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 32);
      // Hide on scroll-down past 120px, show on any upward scroll
      if (y > lastYRef.current && y > 120) setVisible(false);
      else setVisible(true);
      lastYRef.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobile(false); }, [pathname]);

  const logo = isDark ? logoIconDark : logoIconBlue;
  const prefersReduced = useReducedMotion();

  return (
    <>
      {/* ───── Desktop / tablet navbar ───── */}
      <motion.header
        initial={false}
        animate={{ y: visible ? 0 : -88 }}
        transition={prefersReduced ? { duration: 0 } : { duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 inset-x-0 z-50"
      >
        {/* The actual bar — full width like Apple.com */}
        <div
          className={`
            w-full h-14 flex items-center transition-all duration-300 ease-out
            ${scrolled
              ? /* scrolled: true glass blur — like macOS menubar */
                'bg-white/80 dark:bg-[#080810]/80 backdrop-blur-3xl ' +
                'border-b border-black/[0.06] dark:border-white/[0.06] ' +
                'shadow-[0_1px_0_0_rgba(0,0,0,0.04)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)]'
              : /* top of page: very subtle */
                'bg-white/60 dark:bg-[#080810]/40 backdrop-blur-2xl ' +
                'border-b border-transparent'
            }
          `}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-10 flex items-center w-full gap-1">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-2.5 mr-4 shrink-0">
              <img src={logo} alt="SkillLeo" className="h-[26px] w-auto" width="26" height="26" fetchPriority="high" />
              <span className="font-heading font-extrabold text-[15px] tracking-[-0.02em]
                text-slate-900 dark:text-white hidden sm:block">
                SkillLeo
              </span>
            </Link>

            {/* ── Center nav links ── */}
            <nav className="hidden md:flex items-center gap-0 flex-1 justify-center">
              {LINKS.map(l => {
                const active = pathname === l.path;
                return (
                  <Link
                    key={l.path}
                    to={l.path}
                    className={`
                      relative px-4 py-1.5 rounded-lg text-[13.5px] font-medium
                      transition-colors duration-150 select-none
                      ${active
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }
                    `}
                  >
                    {/* Active background — simple CSS, no layoutId = no glitch */}
                    {active && (
                      <span
                        className="absolute inset-0 rounded-lg
                          bg-blue-600/[0.08] dark:bg-blue-500/[0.12]
                          transition-opacity duration-200"
                      />
                    )}
                    <span className="relative">{l.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* ── Right actions ── */}
            <div className="hidden md:flex items-center gap-2 ml-auto">
              <ThemeToggle />
              <Link
                to="/contact"
                className="
                  ml-1 inline-flex items-center gap-1.5
                  h-9 px-4 rounded-xl
                  bg-blue-600 hover:bg-blue-700
                  text-white text-[13px] font-semibold
                  transition-all duration-150
                  shadow-[0_0_0_1px_rgba(37,99,235,0.3),0_2px_8px_rgba(37,99,235,0.22)]
                  hover:shadow-[0_0_0_1px_rgba(37,99,235,0.5),0_4px_16px_rgba(37,99,235,0.35)]
                "
              >
                Get In Touch
                <ArrowRight size={12} strokeWidth={2.5} />
              </Link>
            </div>

            {/* ── Mobile right ── */}
            <div className="flex md:hidden items-center gap-2 ml-auto">
              <ThemeToggle />
              <button
                onClick={() => setMobile(o => !o)}
                className="w-9 h-9 rounded-xl flex items-center justify-center
                  bg-slate-100/80 dark:bg-white/[0.07]
                  border border-slate-200/60 dark:border-white/[0.08]
                  text-slate-600 dark:text-slate-300"
              >
                {mobile ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ───── Mobile drawer ───── */}
      <AnimatePresence>
        {mobile && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobile(false)}
              className="fixed inset-0 z-40 md:hidden
                bg-black/30 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.nav
              initial={{ x: '100%', opacity: 0.6 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 380, damping: 38 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] z-50 md:hidden flex flex-col
                bg-white/95 dark:bg-[#0C0C18]/95
                backdrop-blur-3xl
                border-l border-slate-200/60 dark:border-white/[0.06]
                shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-14
                border-b border-slate-100 dark:border-white/[0.05]">
                <div className="flex items-center gap-2">
                  <img src={logo} alt="SkillLeo" className="h-6" width="24" height="24" loading="lazy" />
                  <span className="font-heading font-bold text-[14px] text-slate-900 dark:text-white">
                    SkillLeo
                  </span>
                </div>
                <button
                  onClick={() => setMobile(false)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center
                    text-slate-400 hover:text-slate-700 dark:hover:text-slate-200
                    hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors">
                  <X size={16} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 py-3 px-3 overflow-y-auto">
                {LINKS.map((l, i) => (
                  <motion.div
                    key={l.path}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.22 }}
                  >
                    <Link
                      to={l.path}
                      className={`
                        flex items-center px-4 py-2.5 rounded-xl text-[14px] font-medium mb-0.5
                        transition-colors duration-150
                        ${pathname === l.path
                          ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/[0.04]'
                        }
                      `}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="p-4 border-t border-slate-100 dark:border-white/[0.05]">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 h-11 rounded-xl
                    bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold
                    transition-colors duration-150
                    shadow-[0_0_0_1px_rgba(37,99,235,0.4),0_4px_12px_rgba(37,99,235,0.25)]"
                >
                  Get In Touch <ArrowRight size={14} />
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
