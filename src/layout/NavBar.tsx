import { motion } from 'framer-motion';

export default function Navbar() {
  const links = ['About', 'Projects', 'Writings', 'Links'];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-20
                 backdrop-blur-md bg-white/10 border border-white/20
                 rounded-full px-6 py-3 flex gap-6 shadow-lg
                 text-sm font-medium"
    >
      {links.map((label) => (
        <a
          key={label}
          href={`#${label.toLowerCase()}`}
          className="text-text hover:text-accent transition-colors duration-200"
        >
          {label}
        </a>
      ))}
    </motion.nav>
  );
}
