import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();
  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.88 }}
      className="w-9 h-9 rounded-xl flex items-center justify-center
        bg-slate-100 dark:bg-white/[0.06]
        border border-slate-200 dark:border-white/[0.08]
        text-slate-500 dark:text-slate-400
        hover:bg-slate-200 dark:hover:bg-white/[0.1]
        hover:text-slate-700 dark:hover:text-slate-200
        transition-all duration-200"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? 'sun' : 'moon'}
          initial={{ rotate: -20, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0,   opacity: 1, scale: 1 }}
          exit={{   rotate:  20, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.18 }}
        >
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
