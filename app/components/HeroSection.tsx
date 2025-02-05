import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  // Typewriter effect state
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitles = [
    "Full-Stack Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  useEffect(() => {
    if (subtitleIndex < subtitles.length - 1) {
      const timeout = setTimeout(() => {
        setSubtitleIndex((prevIndex) => prevIndex + 1);
      }, 1000); // Adjust delay between subtitle parts here
      return () => clearTimeout(timeout);
    }
  }, [subtitleIndex, subtitles.length]);

  // Variants for animating the text
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  // Variants for animating the button
  const buttonVariants = {
    rest: { scale: 1, backgroundColor: "transparent", color: "#000" },
    hover: {
      scale: 1.05,
      backgroundColor: "#000",
      color: "#fff",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 text-center bg-white">
      {/* Content Container */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl font-bold mb-4 text-black"
          initial="hidden"
          animate="visible"
        >
          {["Welcome", "to", "My", "Portfolio"].map((word, index) => (
            <motion.span
              key={word}
              variants={textVariants}
              custom={index}
              className="inline-block"
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated Subtitle with Typewriter Effect */}
        <motion.div
          className="text-lg mb-8 text-gray-700 flex flex-col items-center space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {/* Display Subtitles */}
          {subtitles.slice(0, subtitleIndex + 1).map((text) => (
            <span key={text} className="flex items-center gap-2">
              <span>{text}</span>
            </span>
          ))}

          {/* Blinking Cursor */}
          <motion.span
            className="inline-block text-gray-700"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.div>

        {/* Animated Button */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.button
            className="px-6 py-3 text-lg font-medium border border-black rounded-md bg-transparent mx-auto transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            initial="rest"
            animate="rest"
          >
            Lihat Portofolio
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}