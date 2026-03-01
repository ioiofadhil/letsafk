import { motion } from 'framer-motion';

const ROTATIONS = ['-rotate-2', 'rotate-3', '-rotate-1', 'rotate-2', '-rotate-3', 'rotate-1'] as const;

export type InstagramCardProps = {
  postUrl: string;
  imageUrl: string;
  index?: number;
};

export function InstagramCard({ postUrl, imageUrl, index = 0 }: InstagramCardProps) {
  const rotation = ROTATIONS[index % ROTATIONS.length];

  return (
    <motion.a
      href={postUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, zIndex: 10 }}
      className={`relative aspect-[3/4] rounded-2xl border-4 border-black sticker-shadow transform ${rotation} overflow-hidden group cursor-pointer block`}
    >
      <img
        src={imageUrl}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="font-poppins font-bold text-white text-xl border-2 border-white px-4 py-2 rounded-lg transform -rotate-6">
          View on Instagram
        </span>
      </div>
    </motion.a>
  );
}
