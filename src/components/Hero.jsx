import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center"
    >
      <motion.h1
        className="text-6xl font-bold text-neon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Hey, I’m Vedant 👋
      </motion.h1>
      <motion.p
        className="text-gray-400 mt-4 text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A futuristic thinker, builder, and tech innovator. <br /> Crafting code
        that moves like magic.
      </motion.p>
    </section>
  );
}
