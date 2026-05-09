import { motion } from 'framer-motion';

const navItems = ['Meetups', 'Friends', 'Chat', 'Events'];

export default function Header() {
  return (
    <motion.header initial={{ y: -18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45, ease: 'easeOut' }} className="sticky top-0 z-50 border-b border-gray-700 bg-gray-950/95 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <motion.a href="#hero" whileHover={{ scale: 1.02 }} className="flex items-center gap-3 rounded-lg transition-all duration-200 ease-in-out hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/30">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-500/20">NX</span>
          <span className="font-heading text-2xl font-medium tracking-normal md:text-3xl">Nexora</span>
        </motion.a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <motion.a key={item} href={`#${item.toLowerCase()}`} whileHover={{ y: -1 }} className="rounded-lg text-sm font-normal text-gray-400 transition-all duration-200 ease-in-out hover:text-gray-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/30">
              {item}
            </motion.a>
          ))}
        </div>

        <motion.a href="#events" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-200 ease-in-out hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/30">
          Host event
        </motion.a>
      </nav>
    </motion.header>
  );
}
