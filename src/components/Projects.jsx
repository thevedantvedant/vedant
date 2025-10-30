import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "YogaBot", desc: "A robot that can do yoga 🧘" },
    { title: "Smart Assistant", desc: "AI-driven personal assistant robot" },
  ];

  return (
    <section id="projects" className="py-32 text-center">
      <motion.h2
        className="text-4xl font-bold mb-10 text-neon"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="p-6 border border-neon/30 rounded-2xl hover:shadow-[0_0_20px_#00FFF5]"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold text-neon">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
