import { AnimatePresence, motion } from 'framer-motion';
import CommunityStats from './components/CommunityStats';
import EventHosting from './components/EventHosting';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialConsole from './components/SocialConsole';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen flex flex-col overflow-x-hidden bg-gray-950 text-gray-100"
    >
      <motion.div
        aria-hidden="true"
        animate={{ rotateY: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none fixed inset-0 z-0 opacity-20 [transform-style:preserve-3d]"
      >
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute right-8 top-1/3 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-12 left-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.18]"
      >
        <motion.div
          animate={{ backgroundPosition: ['0px 0px', '80px 80px'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.22, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-x-0 top-[20%] h-px bg-gradient-to-r from-transparent via-violet-600 to-transparent"
        />
      </motion.div>
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="relative z-10 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Hero />
              <FeatureGrid />
              <SocialConsole />
              <EventHosting />
              <CommunityStats />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </motion.div>
  );
}
