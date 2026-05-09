import { motion } from 'framer-motion';

const friends = [
  { name: 'Kai Morgan', status: 'Hosting rooftop jam', tone: 'bg-emerald-400' },
  { name: 'Lena Park', status: 'Exploring creator dome', tone: 'bg-cyan-400' },
  { name: 'Noah Vale', status: 'In private studio', tone: 'bg-violet-600' },
];

const messages = [
  { sender: 'Mika', message: 'Portal is open in Neon Plaza. Want to join before the keynote?' },
  { sender: 'You', message: 'Yes. Send a group teleport invite to the circle.' },
  { sender: 'Sol', message: 'Invite sent. Voice lounge switches to spatial when everyone lands.' },
];

export default function SocialConsole() {
  return (
    <section id="friends" className="py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut' }} className="space-y-6">
          <p className="text-sm font-normal text-gray-400">Friend graph and chat</p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-gray-100 md:text-5xl">
            A social console for every world hop.
          </h2>
          <p className="text-lg leading-relaxed text-gray-400 md:text-xl">
            See who is online, request access to private spaces, send portal invites, and keep conversations alive before, during, and after each meetup.
          </p>

          <motion.div
            id="chat"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-xl shadow-violet-500/10 md:p-8"
          >
            <h3 className="font-heading text-3xl font-semibold tracking-tight text-gray-100 md:text-4xl">Friend presence</h3>
            <div className="mt-6 space-y-4">
              {friends.map((friend, index) => (
                <motion.button
                  key={friend.name}
                  type="button"
                  whileHover={{ scale: 1.01, x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
                  className="flex w-full items-center justify-between gap-4 rounded-lg border border-gray-700 bg-gray-950 p-4 text-left transition-all duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/30"
                >
                  <span className="flex items-center gap-4">
                    <span className={`h-4 w-4 rounded-xl ${friend.tone}`} />
                    <span>
                      <span className="block font-semibold text-gray-100">{friend.name}</span>
                      <span className="text-sm font-normal text-gray-400">{friend.status}</span>
                    </span>
                  </span>
                  <span className="text-sm font-normal text-cyan-400">Join</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }} className="rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-xl shadow-violet-500/10 md:p-8">
          <div className="flex flex-col gap-4 border-b border-gray-700 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-normal text-gray-400">Spatial channel</p>
              <h3 className="font-heading text-3xl font-semibold tracking-tight text-gray-100 md:text-4xl">Neon Plaza crew</h3>
            </div>
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-200 ease-in-out hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/30"
            >
              Send portal
            </motion.button>
          </div>

          <div className="mt-6 space-y-4">
            {messages.map((item, index) => (
              <motion.article
                key={`${item.sender}-${item.message}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
                className="rounded-2xl border border-gray-700 bg-gray-950 p-5 shadow-xl shadow-violet-500/10 transition-all duration-200 ease-in-out hover:bg-gray-800"
              >
                <p className="text-sm font-normal text-cyan-400">{item.sender}</p>
                <p className="mt-2 text-base leading-relaxed text-gray-400">{item.message}</p>
              </motion.article>
            ))}
          </div>

          <form className="mt-6 flex flex-col gap-3 sm:flex-row" aria-label="Chat message form">
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <input id="message" type="text" placeholder="Write to your crew..." className="min-h-12 flex-1 rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-base leading-relaxed text-gray-100 placeholder:text-gray-400 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-violet-500/30" />
            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-200 ease-in-out hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/30"
            >
              Send
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
