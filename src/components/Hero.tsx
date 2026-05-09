import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { useMemo } from 'react';
import MetaverseOrb from './MetaverseOrb';

const orbitMembers = ['Ari', 'Mika', 'Sol', 'Jun'];
const worldCards = ['Neon Plaza', 'Sky Lounge', 'Creator Dome'];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

export default function Hero() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useTransform(mouseY, [0, 1], [12, -12]);
  const rotateY = useTransform(mouseX, [0, 1], [-14, 14]);
  const glowX = useMotionTemplate`calc(${mouseX.get() * 100}% - 10rem)`;
  const glowY = useMotionTemplate`calc(${mouseY.get() * 100}% - 10rem)`;

  const panelTilt = useMemo(() => ({ rotateX, rotateY }), [rotateX, rotateY]);

  return (
    <section id="hero" className="relative overflow-hidden py-20 md:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ x: glowX, y: glowY }}
      >
        <div className="h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <motion.div className="space-y-8" {...fadeUp}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="inline-flex items-center gap-3 rounded-xl border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-normal text-gray-400 shadow-xl shadow-violet-500/10"
          >
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="h-2 w-2 rounded-xl bg-emerald-400 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            />
            Live across 3D social worlds
          </motion.div>

          <div className="space-y-6">
            <h1 className="font-heading text-5xl font-bold tracking-tight text-gray-100 md:text-7xl">
              Meet friends inside a living metaverse.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
              Nexora brings virtual meetups, persistent friend circles, spatial chat, and event hosting into immersive 3D environments built for real social connection.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#meetups"
              className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-6 py-4 font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-200 ease-in-out hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/30"
            >
              Explore virtual meetups
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#chat"
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-900 px-6 py-4 font-semibold text-gray-100 shadow-xl shadow-violet-500/10 transition-all duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/30"
            >
              See social console
            </motion.a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['48K+', 'daily portal jumps'],
              ['12K', 'hosted events'],
              ['180+', '3D environments'],
            ].map(([value, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -4, rotateX: 4, rotateY: -4 }}
                className="rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-xl shadow-violet-500/10 transition-all duration-200 ease-in-out hover:bg-gray-800"
              >
                <p className="font-heading text-3xl font-semibold tracking-tight text-cyan-400 md:text-4xl">{value}</p>
                <p className="mt-2 text-sm font-normal text-gray-400">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-xl shadow-violet-500/10 md:p-8"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mouseX.set((e.clientX - rect.left) / rect.width);
            mouseY.set((e.clientY - rect.top) / rect.height);
          }}
          onMouseLeave={() => {
            mouseX.set(0.5);
            mouseY.set(0.5);
          }}
        >
          <motion.div
            style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-8"
          >
            <MetaverseOrb />
          </motion.div>
          <motion.div style={{ rotateX: panelTilt.rotateX, rotateY: panelTilt.rotateY, transformStyle: 'preserve-3d' }} className="space-y-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-normal text-gray-400">Active world</p>
                <h2 className="font-heading text-2xl font-medium tracking-normal text-gray-100 md:text-3xl">Aurora District</h2>
              </div>
              <motion.span
                animate={{ boxShadow: ['0 0 0px rgba(139,92,246,0.2)', '0 0 26px rgba(139,92,246,0.45)', '0 0 0px rgba(139,92,246,0.2)'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20"
              >
                3D
              </motion.span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {worldCards.map((card, index) => (
                <motion.div
                  key={card}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                  whileHover={{ y: -4, rotateX: 6, rotateY: -6 }}
                  className="min-h-44 rounded-2xl border border-gray-700 bg-gray-950 p-5 shadow-xl shadow-violet-500/10 transition-all duration-200 ease-in-out hover:bg-gray-800"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="h-3 w-3 rounded-xl bg-cyan-400" />
                    <span className="text-sm font-normal text-gray-400">0{index + 1}</span>
                  </div>
                  <p className="font-heading text-2xl font-medium tracking-normal text-gray-100 md:text-3xl">{card}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-2xl border border-gray-700 bg-gray-950 p-6 shadow-xl shadow-violet-500/10"
            >
              <div className="flex flex-wrap items-center gap-3">
                {orbitMembers.map((member, index) => (
                  <motion.button
                    key={member}
                    type="button"
                    whileHover={{ scale: 1.03, y: -2, rotateX: 6 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
                    className="inline-flex items-center gap-3 rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-100 transition-all duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/30"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white">{member.slice(0, 1)}</span>
                    {member}
                  </motion.button>
                ))}
              </div>
              <p className="mt-5 text-base leading-relaxed text-gray-400">
                Friends appear as presence-aware avatars with one-tap join, whisper chat, and group teleport invites.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
