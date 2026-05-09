import { motion } from 'framer-motion';

const metrics = [
  ['98%', 'meetup retention after first event'],
  ['4.8/5', 'average attendee presence score'],
  ['32 min', 'average social session length'],
];

export default function CommunityStats() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut' }} className="rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-xl shadow-violet-500/10 md:p-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-normal text-gray-400">Community operating system</p>
              <h2 className="font-heading text-4xl font-bold tracking-tight text-gray-100 md:text-5xl">
                Built for hosts, creators, teams, and fan communities.
              </h2>
              <p className="text-lg leading-relaxed text-gray-400 md:text-xl">
                Nexora keeps identity, friends, chat history, and events connected across every 3D destination your members visit.
              </p>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#hero"
                className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-6 py-4 font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-200 ease-in-out hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/30"
              >
                Start building your world
              </motion.a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {metrics.map(([value, label], index) => (
                <motion.article
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.07, ease: 'easeOut' }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-gray-700 bg-gray-950 p-6 shadow-xl shadow-violet-500/10 transition-all duration-200 ease-in-out hover:bg-gray-800"
                >
                  <p className="font-heading text-3xl font-semibold tracking-tight text-emerald-400 md:text-4xl">{value}</p>
                  <p className="mt-3 text-sm font-normal text-gray-400">{label}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
