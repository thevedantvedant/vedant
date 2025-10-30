import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="flex justify-between items-center p-6 fixed w-full top-0 bg-dark/70 backdrop-blur-lg z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-neon text-2xl font-bold">VEDANT</h1>
      <ul className="flex space-x-6 text-lg">
        {["Home", "About", "Projects", "Contact"].map((item, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.2, color: "#00FFF5" }}
            className="cursor-pointer"
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
