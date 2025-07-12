import { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import PageWrapper from '../layout/PageWrapper';
import ProjectModal from '../components/ProjectModal';

const base = '/';

const projects = [
  {
    title: 'Anti‑Drone Detection & Elimination',
    description:
      'YOLO‑v11 model trained on 14k images (98 % accuracy) to classify threat vs non‑threat drones in real‑time using RF & radar feeds.',
    tech: 'Python, YOLO‑v11, OpenCV, RF SDK',
  },
  {
    title: 'AI Sonographer Robotic Arm',
    description:
      'Autonomous ultrasound‑probe robot for rural clinics; hunts optimal image plane and enhances captures with AI.',
    tech: 'ROS 2, OpenCV, TensorFlow, C++',
  },
  {
    title: 'TerraCoolant',
    description:
      'Evaporative add‑on for A/C outdoor units — AI‑driven water + temp control cuts power bills via greener cooling.',
    tech: 'Python, Edge IoT, Tiny ML, MQTT',
  },
  {
    title: 'SageBot',
    description:
      'A powerful Discord bot for tracking partnerships, invites, custom embeds, and much more.',
    tech: 'Python, Discord.py, MongoDB, Redis',
    invite: 'https://discord.com/oauth2/authorize?client_id=1388036982537584771&permissions=8&integration_type=0&scope=bot',
  },
  {
    title: 'Diabetic Retinopathy Detector',
    description:
      'Low‑cost DIY fundus‑camera module on Raspberry Pi, 15k‑image model for on‑site DR screening.',
    tech: 'PyTorch, Raspberry Pi, OpenCV',
  },
  {
    title: 'Freelance Discord Bots (2021‑present)',
    description:
      'Custom‑built bots for dozens of clients — moderation, music, AI chat, economy, dashboards.',
    tech: 'Python, Disocrd.py, PSQL, MongoDB, Docker, Redis',
    screenshots: [
      `${base}images/proof-1.png`,
      `${base}images/proof-2.png`,
      `${base}images/proof-3.png`,
      `${base}images/proof-4.png`,
      `${base}images/proof5.png`,
      `${base}images/proof-5.png`,
      `${base}images/proof-6.png`,
    ],
    reviews: [
      {
        author: 'clalista',
        rating: 5,
        text: 'I am very satisfied with the results. He is fast, knowledgeable and very organized. His work is smooth and reliable. I highly recommend! Thank u!'
      },
      {
        author: 'sonneblom',
        rating: 5,
        text: 'It was amazing to work with him. He was helpful, kind and just fun to work with. I thank you very much Miscc and your work on the custom bot is amazing and i dont know what i would have done without u.'
      },
      {
        author: 'henessy_og',
        rating: 5,
        text: 'they where amazing got the details to the tea. 10/10 would you. We’ll recommend more people to buy the bots or commission in the server '
      },
      {
        author: 'dollichi',
        rating: 5,
        text: 'It would be an understatement to say i am blown away by the bot I received, everything was completed in just a few days even the custom commands I requested. She works well and was very cheap for such great service, I’m soso thankful! Tysmm'
      },
    ]
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <PageWrapper>
      <section
        id="projects"
        className="min-h-screen px-6 py-32 flex flex-col items-center text-center"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-display text-accent mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {projects.map((p, i) => (
            <Tilt
              key={i}
              className="w-full h-full"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.03}
              transitionSpeed={400}
              glareEnable={false}
            >
              <motion.div
                onClick={() => setOpenIndex(i)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col justify-between min-h-[220px]
                  bg-white/10 backdrop-blur-md border border-white/20
                  rounded-2xl p-6 text-left overflow-hidden
                  transition-transform duration-300 hover:-translate-y-2
                  before:absolute before:inset-0 before:rounded-2xl 
                  before:bg-gradient-to-r before:from-pink-500 before:via-cyan-400 before:to-purple-500
                  before:opacity-0 before:blur-xl before:transition-all before:duration-500
                  hover:before:opacity-20 hover:before:scale-110`}
              >
                <div>
                  <h3 className="text-xl font-display text-accent mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-text/80 leading-relaxed line-clamp-4">
                    {p.description}
                  </p>
                </div>
                <span className="text-xs text-accent underline self-end">
                  Read →
                </span>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <ProjectModal
          project={openIndex !== null ? projects[openIndex] : null}
          onClose={() => setOpenIndex(null)}
        />
      </section>
    </PageWrapper>
  );
}
