import { motion } from 'framer-motion';

const environments = [
  'Conference nebula',
  'Gallery boulevard',
  'Music arena',
  'Learning campus',
  'Brand showroom',
  'Afterparty skydeck',
];

const agenda = [
  ['18:00', 'Doors open in the welcome atrium'],
  ['18:30', 'Creator panel on the main stage'],
  ['19:15', 'Breakout circles in private rooms'],
  ['20:00', 'Social quest across the district'],
];

export default function EventHosting() {
  return (
    <section id="events" className="border-y border-gray-700 bg-gray-950 py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut' }} className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm font-normal text-gray-400">3D event hosting</p>
              <h2 className="font-heading text-4xl font-bold tracking-tight text-gray-100 md:text-5xl">
                Launch immersive events without rebuilding your community stack.
              </h2>
              <p className="text-lg leading-relaxed text-gray-400 md:text-xl">
                Create portals, manage guests, customize 3D spaces, moderate live rooms, and keep attendees connected through friend requests and chat channels.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {environments.map((environment, index) => (
                <motion.button
                  key={environment}
                  type="button"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-gray-700 bg-gray-900 p-6 text-left shadow-xl shadow-violet-500/10 transition-all duration-200 ease-in-out hover:bg-gray-800 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/30"
                >
                  <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 font-semibold text-gray-950">3D</span>
                  <span className="font-heading text-2xl font-medium tracking-normal text-gray-100 md:text-3xl">{environment}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }} className="rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-xl shadow-violet-500/10 md:p-8">
            <div className="rounded-2xl border border-gray-700 bg-gray-950 p-6 shadow-xl shadow-violet-500/10">
              <p className="text-sm font-normal text-cyan-400">Featured event</p>
              <h3 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-gray-100 md:text-4xl">Future Friends Summit</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-400">
                A multi-room social conference with panel stages, networking portals, and curated friend-matching moments.
              </p>
              <div className="mt-6 space-y-3">
                {agenda.map(([time, item], index) => (
                  <motion.div
                    key={time}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.08, ease: 'easeOut' }}
                    className="flex gap-4 rounded-xl border border-gray-700 bg-gray-900 p-4"
                  >
                    <span className="text-sm font-normal text-emerald-400">{time}</span>
                    <span className="text-sm font-normal text-gray-400">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <form className="mt-6 space-y-4" aria-label="Event launch form">
              <div>
                <label htmlFor="event-name" className="text-sm font-normal text-gray-400">
                  Event name
                </label>
                <input id="event-name" type="text" placeholder="Creator meetup" className="mt-2 w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-base leading-relaxed text-gray-100 placeholder:text-gray-400 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-violet-500/30" />
              </div>
              <div>
                <label htmlFor="environment" className="text-sm font-normal text-gray-400">
                  Environment
                </label>
                <select id="environment" className="mt-2 w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-base leading-relaxed text-gray-100 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-violet-500/30">
                  {environments.map((environment) => (
                    <option key={environment}>{environment}</option>
                  ))}
                </select>
              </div>
              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center rounded-lg bg-violet-600 px-6 py-4 font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-200 ease-in-out hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/30"
              >
                Build event portal
              </motion.button>
            </form>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
