import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 text-center">
      <motion.h2
        className="text-4xl font-bold mb-6 text-neon"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        (You can fill your own text here)
      </motion.p>
    </section>
  );
}
