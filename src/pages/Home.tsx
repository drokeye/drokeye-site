import { motion } from 'framer-motion';
import PageWrapper from '../layout/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <section className="min-h-screen flex flex-col justify-center items-center text-center gap-[--space-lg] px-[--space-lg]">
        <motion.h1
          className="text-4xl md:text-6xl font-display text-accent drop-shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Hi, I'm Prabakar.
        </motion.h1>
        <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            >
            <a
                href="#about"
                className="group inline-flex items-center justify-center px-5 py-3 
                        bg-white/10 text-text text-sm font-semibold 
                        rounded-full border border-white/20 
                        hover:bg-white/20 transition-all duration-200 
                        backdrop-blur-md shadow-md"
            >
                <svg
                className="w-4 h-4 mr-2 animate-bounce opacity-70 group-hover:opacity-100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                Scroll Down
            </a>
        </motion.div>
      </section>
    </PageWrapper>
  );
}
