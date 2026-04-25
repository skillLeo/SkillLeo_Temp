import { lazy, Suspense, Component } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ── Route-based code splitting ─────────────────────────────────────────────
// Each page becomes its own JS chunk — only downloaded when the user
// navigates to that route. Cuts initial JS parse by ~60%.
const Home      = lazy(() => import('./pages/Home'));
const Services  = lazy(() => import('./pages/Services'));
const About     = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact   = lazy(() => import('./pages/Contact'));

// Minimal skeleton shown while a lazy page chunk is loading
function PageSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] dark:bg-[#080810]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-blue-600/20 border-t-blue-600 animate-spin" />
        <p className="text-sm text-slate-400">Loading…</p>
      </div>
    </div>
  );
}

// Error boundary — prevents a single crashed component from blanking the whole page
class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center px-6">
          <div className="text-center max-w-sm">
            <p className="text-slate-400 text-sm mb-3">Something went wrong loading this section.</p>
            <button
              onClick={() => this.setState({ error: null })}
              className="text-blue-600 text-sm underline underline-offset-2"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  enter:   { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -6, transition: { duration: 0.18 } },
};

function PageWrapper({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="enter" exit="exit">
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
    <ErrorBoundary>
    <Suspense fallback={<PageSkeleton />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"          element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/services"  element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/about"     element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
          <Route path="/contact"   element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
    </ErrorBoundary>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#0A0A0F] transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
