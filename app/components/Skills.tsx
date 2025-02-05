import { motion } from "framer-motion";

export default function Skills() {
  // Variants for animating the heading
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Variants for animating the skill cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Next.js",
    "Remix",
    "Git",
    "Express.js",
    "HTML/CSS",
  ];

  return (
    <section className="py-20 bg-white">
      {/* Content Container */}
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-black"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Kemampuan Utama
        </motion.h2>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="p-4 bg-gray-100 border border-black rounded-lg text-center shadow-md hover:bg-black hover:text-white transition-all duration-300"
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-lg font-medium">{skill}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}