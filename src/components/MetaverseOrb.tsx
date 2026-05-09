import { motion } from 'framer-motion';

const ringVariants = {
  animate: (custom: number) => ({
    rotate: 360,
    scale: [1, 1.06, 1],
    transition: {
      rotate: {
        duration: 22 + custom * 4,
        repeat: Infinity,
        ease: 'linear',
      },
      scale: {
        duration: 4.5 + custom,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }),
};

export default function MetaverseOrb() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[26rem] items-center justify-center [transform-style:preserve-3d]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-gray-700 shadow-xl shadow-violet-500/10"
      />
      <motion.div
        custom={0}
        variants={ringVariants}
        animate="animate"
        className="absolute inset-4 rounded-full border border-violet-600/40"
      />
      <motion.div
        custom={1}
        variants={ringVariants}
        animate="animate"
        className="absolute inset-12 rounded-full border border-cyan-400/40"
      />
      <motion.div
        animate={{ y: [0, -10, 0], rotateX: [14, 0, 14], rotateY: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex h-64 w-64 items-center justify-center rounded-full border border-gray-700 bg-gray-900 shadow-xl shadow-violet-500/10 [transform-style:preserve-3d]"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-6 rounded-full bg-violet-600/20 blur-2xl"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-3 rounded-full border border-gray-700/70"
        />
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-gray-700 bg-gray-950 shadow-xl shadow-violet-500/10">
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 rounded-lg bg-violet-600 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-violet-500/20"
          >
            3D Hub
          </motion.span>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            className="flex h-24 w-24 items-center justify-center rounded-full border border-gray-700 bg-gray-900"
          >
            <span className="font-heading text-3xl font-semibold tracking-tight text-white">NX</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
