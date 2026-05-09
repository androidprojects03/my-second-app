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
      <Header />
      <main className="flex-1">
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
    </motion.div>
  );
}
