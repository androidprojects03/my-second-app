import { motion } from 'framer-motion';

const links = ['Worlds', 'Safety', 'Developers', 'Events'];

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-gray-950/95">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <motion.a href="#hero" whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-3 rounded-lg transition-all duration-200 ease-in-out hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/30">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-500/20">NX</span>
              <span className="font-heading text-2xl font-medium tracking-normal text-gray-100 md:text-3xl">Nexora</span>
            </motion.a>
            <p className="mt-3 text-sm font-normal text-gray-400">Metaverse social infrastructure for persistent communities.</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {links.map((link) => (
              <motion.a key={link} href="#hero" whileHover={{ y: -1 }} className="rounded-lg px-3 py-2 text-sm font-normal text-gray-400 transition-all duration-200 ease-in-out hover:text-gray-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/30">
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
