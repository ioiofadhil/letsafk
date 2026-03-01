import { motion } from 'framer-motion';
import { MapPin, Utensils, Users, Compass } from 'lucide-react';
import { Heading } from './ui';
export function AboutSection() {
  const features = [
  {
    icon: <Utensils size={32} />,
    title: 'Food Hunts',
    desc: 'Street food to hidden gems',
    color: 'bg-[#FF6B9D]'
  },
  {
    icon: <Users size={32} />,
    title: 'Social Mixers',
    desc: 'No awkward small talk',
    color: 'bg-[#FFD93D]'
  },
  {
    icon: <Compass size={32} />,
    title: 'Adventures',
    desc: 'Weekend hikes & trips',
    color: 'bg-white'
  },
  {
    icon: <MapPin size={32} />,
    title: 'Local Spots',
    desc: 'Discover your city',
    color: 'bg-[#EA580C]'
  }];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.6
            }}
            className="space-y-8 relative z-10">

            <div className="inline-block bg-black text-white px-4 py-2 rounded-lg font-poppins font-bold transform -rotate-2 border-2 border-white/20">
              The Concept
            </div>

            <Heading as="h2" accent="pink">
              What is Let's AFK?
            </Heading>

            <div className="bg-white text-black p-8 rounded-2xl border-4 border-black sticker-shadow transform rotate-1">
              <p className="font-inter text-lg md:text-xl leading-relaxed font-medium">
                We're a community of food lovers, adventure seekers, and social
                butterflies in Indonesia.
                <br />
                <br />
                Every weekend, we organize free events — from street food hunts
                across Jakarta to iftar gatherings, hiking trips, and game
                nights.
                <br />
                <br />
                <span className="font-bold bg-[#FFD93D] px-2 py-1 rounded inline-block transform -rotate-1">
                  No awkward small talk, just good vibes and great food.
                </span>
                <br />
                <br />
                Come as you are, leave as friends.
              </p>
            </div>
          </motion.div>

          {/* Right: Feature Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              whileHover={{
                scale: 1.05,
                rotate: index % 2 === 0 ? 3 : -3
              }}
              className={`${feature.color} ${feature.color === 'bg-[#EA580C]' ? 'text-white' : 'text-black'} p-6 rounded-2xl border-4 border-black sticker-shadow flex flex-col items-center text-center gap-4 transform ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'}`}>

                <div
                className={`p-4 rounded-full border-4 border-black bg-white text-black`}>

                  {feature.icon}
                </div>
                <div>
                  <Heading as="h3" className="mb-2">
                    {feature.title}
                  </Heading>
                  <p className="font-inter font-medium text-sm opacity-90">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}