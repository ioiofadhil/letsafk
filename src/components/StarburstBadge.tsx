import { motion } from "framer-motion";
interface StarburstBadgeProps {
  text: string;
  className?: string;
  color?: "yellow" | "pink";
}
export function StarburstBadge({
  text,
  className = "",
  color = "yellow",
}: StarburstBadgeProps) {
  const textColor = color === "yellow" ? "text-black" : "text-white";
  return (
    <motion.div
      className={`relative inline-flex items-center justify-center w-24 h-24 ${className}`}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* SVG Starburst Shape */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full drop-shadow-md"
      >
        <path
          fill={color === "yellow" ? "#FFD93D" : "#FF6B9D"}
          stroke="black"
          strokeWidth="3"
          d="M50,0 L56,35 L90,20 L65,48 L100,65 L65,70 L75,100 L50,78 L25,100 L35,70 L0,65 L35,48 L10,20 L44,35 Z"
        />
      </svg>

      {/* Text Container (counter-rotating to stay upright if we wanted, but let's let it spin or keep it static and spin the SVG) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-poppins font-black text-lg tracking-wider transform -rotate-12 ${textColor} drop-shadow-sm`}
        >
          {text}
        </span>
      </div>
    </motion.div>
  );
}
export function StaticStarburstBadge({
  text,
  className = "",
  color = "yellow",
}: StarburstBadgeProps) {
  const textColor = color === "yellow" ? "text-black" : "text-white";
  return (
    <div
      className={`relative inline-flex items-center justify-center w-20 h-20 ${className}`}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full drop-shadow-md"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          fill={color === "yellow" ? "#FFD93D" : "#FF6B9D"}
          stroke="black"
          strokeWidth="3"
          d="M50,0 L56,35 L90,20 L65,48 L100,65 L65,70 L75,100 L50,78 L25,100 L35,70 L0,65 L35,48 L10,20 L44,35 Z"
        />
      </motion.svg>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span
          className={`font-poppins font-black text-sm tracking-wider transform -rotate-12 ${textColor}`}
        >
          {text}
        </span>
      </div>
    </div>
  );
}
