import { motion } from "framer-motion";
import { INSTAGRAM_PROFILE_URL, INSTAGRAM_POSTS } from "../config/instagram";
import { Button, Heading, InstagramCard } from "./ui";

const PLACEHOLDER_ITEMS = [
  {
    id: 1,
    color: "bg-[#FF6B9D]",
    pattern: "pattern-dots",
    height: "h-64",
    rotation: "-rotate-2",
  },
  {
    id: 2,
    color: "bg-[#FFD93D]",
    pattern: "pattern-zigzag",
    height: "h-48",
    rotation: "rotate-3",
  },
  {
    id: 3,
    color: "bg-white",
    pattern: "pattern-waves",
    height: "h-80",
    rotation: "-rotate-1",
  },
  {
    id: 4,
    color: "bg-[#EA580C]",
    pattern: "pattern-grid",
    height: "h-56",
    rotation: "rotate-2",
  },
  {
    id: 5,
    color: "bg-[#FFD93D]",
    pattern: "pattern-dots",
    height: "h-72",
    rotation: "-rotate-3",
  },
  {
    id: 6,
    color: "bg-[#FF6B9D]",
    pattern: "pattern-zigzag",
    height: "h-64",
    rotation: "rotate-1",
  },
];

function PlaceholderCard({ item }: { item: (typeof PLACEHOLDER_ITEMS)[0] }) {
  return (
    <motion.a
      href={INSTAGRAM_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      key={item.id}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, zIndex: 10 }}
      className={`relative ${item.height} ${item.color} rounded-2xl border-4 border-black sticker-shadow transform ${item.rotation} overflow-hidden group cursor-pointer block`}
      style={{
        backgroundImage:
          item.pattern === "pattern-dots"
            ? "radial-gradient(black 2px, transparent 2px)"
            : item.pattern === "pattern-grid"
              ? "linear-gradient(black 2px, transparent 2px), linear-gradient(90deg, black 2px, transparent 2px)"
              : "repeating-linear-gradient(45deg, black, black 10px, transparent 10px, transparent 20px)",
        backgroundSize:
          item.pattern === "pattern-dots"
            ? "20px 20px"
            : item.pattern === "pattern-grid"
              ? "40px 40px"
              : "auto",
      }}
    >
      <div className="absolute inset-3 border-2 border-black/20 rounded-xl" />
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/60 backdrop-blur-sm border border-black/10 transform rotate-2" />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="font-poppins font-bold text-white text-xl border-2 border-white px-4 py-2 rounded-lg transform -rotate-6">
          View on Instagram
        </span>
      </div>
    </motion.a>
  );
}

export function GallerySection() {
  const hasPosts = INSTAGRAM_POSTS.length > 0;

  return (
    <section
      id="gallery"
      className="py-24 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Heading
                as="h2"
                accent="yellow"
              >
                Highlights
              </Heading>
            </motion.div>
            <p className="font-inter text-xl text-white mt-2 font-medium">
              Memories from our past AFK sessions.
            </p>
          </div>

          <Button
            as="a"
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            color="white"
          >
            View Instagram
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hasPosts
            ? INSTAGRAM_POSTS.map((post, index) => (
                <InstagramCard
                  key={post.postUrl}
                  postUrl={post.postUrl}
                  imageUrl={post.imageUrl}
                  index={index}
                />
              ))
            : PLACEHOLDER_ITEMS.map((item) => (
                <PlaceholderCard
                  key={item.id}
                  item={item}
                />
              ))}
        </div>
      </div>
    </section>
  );
}
