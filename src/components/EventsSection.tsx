import { motion } from 'framer-motion';
import { EventCard } from './ui/EventCard';
import { Heading } from './ui/Heading';

const events = [
  {
    id: 1,
    title: 'Food Hunt: Menteng Street Eats',
    date: 'Sat, Oct 14',
    time: '18:30 PM',
    location: 'Menteng, Jakarta',
    desc: 'Join us for a culinary adventure through the legendary street food stalls of Menteng. Bring an empty stomach!',
    color: 'white' as const,
    rotation: '-rotate-2',
    badge: 'HOT',
  },
  {
    id: 2,
    title: 'Iftar Bersama at Senayan',
    date: 'Fri, Oct 20',
    time: '17:00 PM',
    location: 'Senayan Park',
    desc: 'Break your fast with new friends! We are gathering at Senayan Park for a massive community iftar picnic.',
    color: 'yellow' as const,
    rotation: 'rotate-1',
    badge: 'FREE',
  },
  {
    id: 3,
    title: 'Weekend Hike: Gunung Pancar',
    date: 'Sun, Oct 29',
    time: '06:00 AM',
    location: 'Sentul, Bogor',
    desc: 'Escape the city pollution. A beginner-friendly morning hike followed by local coffee and breakfast.',
    color: 'pink' as const,
    rotation: '-rotate-1',
    badge: 'NEW',
  },
  {
    id: 4,
    title: 'Board Game Night: Kemang',
    date: 'Fri, Nov 3',
    time: '19:00 PM',
    location: 'Kemang, South Jakarta',
    desc: 'Casual board games, pizza, and good vibes. Perfect for introverts looking to socialize in a structured setting.',
    color: 'white' as const,
    rotation: 'rotate-2',
    badge: '',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export function EventsSection() {
  return (
    <section id="events" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heading as="h2" accent="white" className="inline-block">
              Upcoming Events
            </Heading>
          </motion.div>
          <p className="font-inter text-xl text-white mt-4 font-medium max-w-2xl mx-auto bg-black/30 p-2 rounded-lg backdrop-blur-sm">
            Grab your spot before they fill up!
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              desc={event.desc}
              color={event.color}
              rotation={event.rotation}
              badge={event.badge || undefined}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
