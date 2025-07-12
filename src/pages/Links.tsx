import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import PageWrapper from '../layout/PageWrapper';
import {
  FaGithub,
  FaDiscord,
  FaEnvelope,
  FaFileDownload,
} from 'react-icons/fa';
import toast from 'react-hot-toast';

const links = [
  {
    label: 'GitHub',
    sub: '@drokeye',
    href: 'https://github.com/drokeye',
    icon: FaGithub,
  },
  {
    label: 'Discord',
    sub: 'miscc',
    href: null, // no direct URL—copy instead
    icon: FaDiscord,
    copy: 'miscc',
  },
  {
    label: 'Email',
    sub: 'connect.prabakargk@gmail.com',
    href: 'mailto:connect.prabakargk@gmail.com',
    icon: FaEnvelope,
  },
];

export default function Links() {
  const handleClick = (item: (typeof links)[number]) => {
    if (item.copy) {
      navigator.clipboard.writeText(item.copy);
      toast.success('Discord tag copied!');
    }
  };

  return (
    <PageWrapper>
      <section 
      id="links"
      className="min-h-screen px-6 py-32 flex flex-col items-center text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-display text-accent mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Links
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
          {links.map((item, i) => (
            <Tilt
              key={i}
              className="w-full h-full"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.03}
              transitionSpeed={400}
              glareEnable={false}
            >
              <motion.a
                href={item.href ?? '#'}
                onClick={(e) => {
                  if (item.copy) {
                    e.preventDefault();
                    handleClick(item);
                  }
                }}
                download={item.download}
                target={item.href ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center items-center gap-3 h-full min-h-[180px]
                           bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl
                           shadow-md px-6 py-8 text-center cursor-pointer
                           transition-transform hover:-translate-y-2 hover:shadow-xl
                           before:absolute before:inset-0 before:rounded-2xl
                           before:bg-gradient-to-r before:from-pink-500 before:via-cyan-400 before:to-purple-500
                           before:opacity-0 before:blur-xl before:transition-all before:duration-500
                           hover:before:opacity-20 hover:before:scale-110"
              >
                <item.icon size={42} className="text-accent drop-shadow-lg" />
                <div>
                  <p className="font-display text-xl text-accent">{item.label}</p>
                  <p className="text-xs text-white/70">{item.sub}</p>
                </div>
              </motion.a>
            </Tilt>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
