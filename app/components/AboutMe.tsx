import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function AboutMe() {
  // State for collapsible content
  const [isExpanded, setIsExpanded] = useState(false);

  // Variants for animating the heading
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Variants for animating the text content
  const textVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
      opacity: 1,
      height: "auto",
      overflow: "hidden",
      transition: { duration: 0.6 },
    },
    exit: {
      opacity: 0,
      height: 0,
      overflow: "hidden",
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 bg-white">
      {/* Content Container */}
      <motion.div
        className="container mx-auto px-4 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Header */}
        <motion.div
          className="text-center mb-8"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src="/placeholder.svg?height=120&width=120"
            alt="Your Name"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-4 border-4 border-black shadow-lg"
          />
          <h1 className="text-3xl font-bold text-black">Bara Satrio</h1>
          <p className="text-gray-700">Web Developer || Accountant</p>
        </motion.div>

        {/* Toggle Button for About Me Text */}
        <motion.button
          className="block mx-auto py-2 px-6 text-lg font-medium text-black border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300 mb-4"
          onClick={() => setIsExpanded(!isExpanded)}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? "Hide Details" : "Show Details"}
        </motion.button>

        {/* Collapsible About Me Text */}
        <AnimatePresence>
          {isExpanded && (
            <motion.p
              className="text-center text-gray-700 mb-8 overflow-hidden"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              I&apos;m passionate about building scalable web applications and
              love creating solutions that solve real-world problems. With
              several years of experience, I focus on delivering innovative and
              user-friendly products.
            </motion.p>
          )}
        </AnimatePresence>

        {/* Contact Info */}
        <motion.div
          className="flex justify-center items-center space-x-2 text-gray-700 mb-8"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <Mail className="w-5 h-5" />
          <span>barasatrio@gmail.com</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
