import { motion } from 'framer-motion';
import {
  SiPython,
  SiGo,
  SiRust,
  SiRuby,
  SiJavascript,
  SiC,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiDocker,
  SiTensorflow,
  SiPytorch,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { MdOutlineMemory } from 'react-icons/md';

const skills = [
  { name: 'Python', icon: SiPython },
  { name: 'Go', icon: SiGo },
  { name: 'Rust', icon: SiRust },
  { name: 'Ruby', icon: SiRuby },
  { name: 'Java', icon: FaJava },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'C', icon: SiC },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git', icon: SiGit },
  { name: 'Docker', icon: SiDocker },
  { name: 'TensorFlow', icon: SiTensorflow },
  { name: 'PyTorch', icon: SiPytorch },
  { name: 'NLP', icon: MdOutlineMemory },
];


export default function SkillsGrid() {
  return (
    <motion.div
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mt-12"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true }}
    >
      {skills.map(({ name, icon: Icon }, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center p-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Icon size={32} className="text-accent mb-2" />
          <p className="text-xs font-medium text-text">{name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
