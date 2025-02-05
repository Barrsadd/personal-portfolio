import { motion } from "framer-motion";

export default function Projects() {
  // Variants for animating the heading
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Variants for animating the project cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const projects = [
    {
      title: "Project 1",
      description:
        "A brief description of the project and its key features.",
    },
    {
      title: "Project 2",
      description:
        "A brief description of the project and its key features.",
    },
    {
      title: "Project 3",
      description:
        "A brief description of the project and its key features.",
    },
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
          My Projects
        </motion.h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="p-6 bg-gray-100 border border-black rounded-lg text-center shadow-md hover:bg-black hover:text-white transition-all duration-300"
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 transition-all duration-300">{project.title}</h3>
              <p className="mb-6 transition-all duration-300">{project.description}</p>
              <button className="px-4 py-2 text-sm font-medium border border-black rounded-md bg-transparent hover:bg-white hover:text-black transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}