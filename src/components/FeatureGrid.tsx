import { motion } from 'framer-motion';

const features = [
  {
    title: 'Virtual meetups',
    label: 'Meetups',
    text: 'Spin up lounges, galleries, classrooms, or rooftop hubs where guests can walk, talk, and gather naturally.',
  },
  {
    title: 'Friend system',
    label: 'Friends',
    text: 'Build circles, track live presence, share worlds, and jump into friends’ sessions with permission-first controls.',
  },
  {
    title: 'Spatial chat',
    label: 'Chat',
    text: 'Blend proximity voice, group messaging, private whispers, reactions, and persistent world channels.',
  },
  {
    title: '3D event hosting',
    label: 'Events',
    text: 'Schedule ticketed meetups, stream panels, moderate rooms, and guide attendees through immersive agendas.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="meetups" className="border-y border-gray-700 bg-gray-950 py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-normal text-gray-400">Metaverse social layer</p>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-gray-100 md:text-5xl">
            Everything your community needs to feel present.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-400 md:text-xl">
            A connected suite of social tools designed around presence, identity, and shared experiences inside 3D environments.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-xl shadow-violet-500/10 transition-all duration-200 ease-in-out hover:bg-gray-800"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-500/20">
                {feature.label.slice(0, 2)}
              </div>
              <p className="text-sm font-normal text-cyan-400">{feature.label}</p>
              <h3 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-gray-100 md:text-4xl">{feature.title}</h3>
              <p className="mt-5 text-base leading-relaxed text-gray-400">{feature.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
