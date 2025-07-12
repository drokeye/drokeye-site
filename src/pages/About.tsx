import { motion } from 'framer-motion';
import PageWrapper from '../layout/PageWrapper';
import SkillsGrid from '../components/SkillsGrid';

const base = '/'; // Adjust base URL as needed

export default function About() {
  return (
    <PageWrapper>
      <section
        id="about"
        className="min-h-screen px-6 py-32 flex flex-col items-center relative space-y-20"
      >
        {/* floating blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

        {/* bio card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl w-full px-8 py-10
                     bg-white/10 backdrop-blur-lg border border-white/20
                     rounded-2xl text-text shadow-2xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4 text-accent">About Me</h2>
          <p className="text-md md:text-lg opacity-90 font-body leading-relaxed space-y-4">
            <span className="inline-block mb-2">
              To whomever reading this — I hope you're fine 
              <span className="inline-block w-6 h-6 align-middle mx-1">
                <img src={`${base}images/cat-happy.svg`} alt=":)" />
              </span>
            </span>
            <br />
            I’m <strong>Prabakar</strong> — a developer, writer, and overthinker fleeting through life.
            I’m an engineering graduate (obviously, because I’m Indian — and before you ask, yes, I wear cologne).
            <br />
            <span className="inline-block">
              <span className="inline-block w-6 h-6 align-middle mx-1">
                <img src={`${base}images/cat-smirk.svg`} alt=":>" />
              </span>
              Well, <em>not actually</em> graduated — I'm expected to finish in <strong>2027</strong>, specializing in <strong>AI/ML</strong>.
            </span>
            So yeah, just another fish in the pond.  
            If you care, I love music, movies... basically, <em>art</em>.  
            Hiphop, rock, experimental (scaring-the-hoes type music).  
            <br />
            Movie taste? Check this out:  
            <a
              href="https://letterboxd.com/prxbxmisc/"
              className="text-accent underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              letterboxd.com/prxbxmisc
            </a>
            <br /><br />
            <span className="inline-block">
              And if none of this makes sense to you —
              <span className="inline-block w-6 h-6 align-middle mx-1">
                <img src={`${base}images/cat-sad.svg`} alt=":(" />
              </span>
              — it’s okay.
            </span>
          </p>
        </motion.div>

        {/* skills card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl w-full px-8 py-10
                     bg-white/10 backdrop-blur-lg border border-white/20
                     rounded-2xl text-center shadow-2xl"
        >
          <h3 className="mb-8 text-2xl md:text-3xl font-display text-accent">
            Technical Skills
          </h3>

          <SkillsGrid />
        </motion.div>
      </section>
    </PageWrapper>
  );
}
