import { motion } from "framer-motion";

export default function Contact() {
  // Variants for animating the heading
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Variants for animating the text
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } },
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
    <section className="py-20 bg-white">
      {/* Content Container */}
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold mb-8 text-black"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Get In Touch
        </motion.h2>

        {/* Animated Text */}
        <motion.p
          className="text-lg mb-8 text-gray-700"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out if you&apos;d like to connect!
        </motion.p>

        {/* Animated Button */}
        <motion.button
          className="px-8 py-4 text-lg font-medium border border-black rounded-md bg-transparent transition-all duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
          initial="rest"
          animate="rest"
        >
          Contact Me
        </motion.button>
      </motion.div>
    </section>
  );
}