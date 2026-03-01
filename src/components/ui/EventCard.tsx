import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { StaticStarburstBadge } from '../StarburstBadge';
import { Button } from './Button';

export type EventCardColor = 'white' | 'yellow' | 'pink';

const cardColors: Record<EventCardColor, string> = {
  white: 'bg-white text-black',
  yellow: 'bg-[#FFD93D] text-black',
  pink: 'bg-[#FF6B9D] text-white',
};

const iconColors: Record<EventCardColor, string> = {
  white: 'text-[#EA580C]',
  yellow: 'text-[#EA580C]',
  pink: 'text-white',
};

const descColors: Record<EventCardColor, string> = {
  white: 'text-gray-700',
  yellow: 'text-gray-700',
  pink: 'text-white/90',
};

export type EventCardProps = {
  title: string;
  date: string;
  time: string;
  location: string;
  desc: string;
  color?: EventCardColor;
  rotation?: string;
  badge?: string;
  onJoin?: () => void;
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export function EventCard({
  title,
  date,
  time,
  location,
  desc,
  color = 'white',
  rotation = 'rotate-0',
  badge,
  onJoin,
}: EventCardProps) {
  const isPink = color === 'pink';

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, zIndex: 20 }}
      className={`${cardColors[color]} p-6 rounded-2xl border-4 border-black sticker-shadow transform ${rotation} flex flex-col h-full relative transition-transform duration-300`}
    >
      {badge && (
        <div className="absolute -top-6 -right-6 z-10">
          <StaticStarburstBadge
            text={badge}
            color={color === 'yellow' ? 'pink' : 'yellow'}
          />
        </div>
      )}

      <div className="flex-1">
        <h3 className="font-poppins font-bold text-2xl mb-4 leading-tight">
          {title}
        </h3>

        <div className="space-y-3 mb-6 font-inter font-semibold text-sm">
          <div className="flex items-center gap-2">
            <Calendar size={18} className={iconColors[color]} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} className={iconColors[color]} />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} className={iconColors[color]} />
            <span>{location}</span>
          </div>
        </div>

        <p className={`font-inter text-sm mb-8 ${descColors[color]} font-medium`}>
          {desc}
        </p>
      </div>

      <Button
        as="button"
        size="md"
        color={isPink ? 'orange-inverse' : 'orange'}
        className="w-full py-3"
        onClick={onJoin}
      >
        Join Event
      </Button>
    </motion.div>
  );
}
