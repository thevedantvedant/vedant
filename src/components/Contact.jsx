import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 text-center">
      <motion.h2
        className="text-4xl font-bold mb-6 text-neon"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Contact Me
      </motion.h2>
      <motion.a
        href="mailto:youremail@example.com"
        className="text-neon border border-neon px-6 py-3 rounded-xl hover:bg-neon hover:text-dark transition-all"
        whileHover={{ scale: 1.1 }}
      >
        Say Hello
      </motion.a>
    </section>
  );
}
