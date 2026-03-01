import { motion } from "framer-motion";
import { StarburstBadge } from "./StarburstBadge";
import { Button, Heading } from "./ui";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center md:pt-36 pt-40 pb-12 px-4 overflow-hidden">
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#FF6B9D] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      <div
        className="absolute bottom-1/4 right-10 w-40 h-40 bg-[#FFD93D] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start space-y-6"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="absolute -top-24 -left-8 z-20"
            >
              <StarburstBadge
                text="NEW!"
                color="pink"
                className="w-20 h-20"
              />
            </motion.div>
            <Heading as="h1">
              Meet new friends.
              <br />
              <span className="text-[#FFD93D]">Hunt good food.</span>
              <br />
              <span className="text-[#FF6B9D]">Go AFK together.</span>
            </Heading>
          </div>
          <p className="font-inter text-xl md:text-2xl text-white/90 max-w-lg font-medium bg-black/20 p-4 rounded-xl backdrop-blur-sm border-2 border-white/10">
            The ultimate weekend social club in Indonesia. Unplug, step outside,
            and experience the city with awesome people.
          </p>
          <div className="flex md:flex-row flex-col gap-4 pt-4">
            <Button
              as="a"
              href="#events"
              size="lg"
              color="yellow"
            >
              Find an Event
            </Button>
            <Button
              as="a"
              href="#about"
              size="lg"
              color="white"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] mx-auto lg:ml-auto"
        >
          <div className="absolute -inset-3 sm:-inset-4 bg-[#FF6B9D] rounded-2xl sm:rounded-3xl transform -rotate-6 border-4 border-black sticker-shadow" />
          <div className="absolute -inset-3 sm:-inset-4 bg-[#FFD93D] rounded-2xl sm:rounded-3xl transform rotate-3 border-4 border-black" />
          <div className="relative bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl border-4 border-black sticker-shadow z-10 transform transition-transform hover:rotate-0 duration-300">
            <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 lg:-top-6 lg:-right-6 z-20">
              <StarburstBadge
                text="FREE"
                color="yellow"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
              />
            </div>
            <img
              src="/pasted-image.jpg"
              alt="Let's AFK Community Event"
              className="w-full h-auto max-h-[320px] sm:max-h-[380px] md:max-h-[420px] rounded-lg sm:rounded-xl border-2 border-black object-cover object-top"
            />
            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-5 sm:h-8 bg-white/50 backdrop-blur-sm border border-white/20 transform -rotate-2 shadow-sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
