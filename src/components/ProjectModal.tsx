import { AnimatePresence, motion } from 'framer-motion';
import {
  FaTimes,
  FaDiscord,
  FaStar,
  FaRegStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import { useState, useRef } from 'react';

type Review = { author: string; rating: number; text: string };

type Project = {
  title: string;
  description: string;
  tech?: string;
  invite?: string;
  link?: string;
  screenshots?: string[];
  reviews?: Review[];
};

type Props = { project: Project | null; onClose: () => void };

export default function ProjectModal({ project, onClose }: Props) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const reviewPrev = useRef<HTMLButtonElement>(null);
  const reviewNext = useRef<HTMLButtonElement>(null);

  if (!project) return null;

  const {
    title,
    description,
    tech,
    invite,
    link,
    screenshots = [],
    reviews = [],
  } = project;

  const accent = 'var(--color-accent)';

  return (
    <AnimatePresence>
      {/* ─── Backdrop ─────────────────────────────────────── */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* ─── Modal ───────────────────────────────────────── */}
        <motion.div
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto
                     bg-white/10 backdrop-blur-xl border border-white/20
                     rounded-2xl p-6 shadow-2xl space-y-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xl text-white hover:text-accent"
          >
            <FaTimes />
          </button>

          {/* summary */}
          <div className="space-y-2">
            <h3 className="text-2xl font-display text-accent">{title}</h3>
            <p className="text-sm leading-relaxed">{description}</p>
            {tech && (
              <p className="text-xs text-white/70">
                <span className="font-semibold text-white">Stack:</span> {tech}
              </p>
            )}
            {invite && (
              <a
                href={invite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent
                           rounded-full hover:bg-accent/30 transition-colors text-sm"
              >
                <FaDiscord size={18} /> Invite Bot
              </a>
            )}
          </div>

          {/* ── Screenshots ─────────────────────────────── */}
          {screenshots.length > 0 && (
            <div>
              <h4 className="font-display text-accent text-lg mb-2">Screenshots</h4>
              <Swiper
                modules={[Navigation, Pagination, Zoom]}
                navigation
                pagination={{ clickable: true }}
                zoom={{ maxRatio: 3 }}
                spaceBetween={16}
                style={
                  {
                    '--swiper-pagination-color': accent,
                    '--swiper-navigation-color': accent,
                  } as React.CSSProperties
                }
                className="rounded-xl"
              >
                {screenshots.map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="swiper-zoom-container rounded-xl">
                      <img
                        src={src}
                        alt={`Screenshot ${i + 1}`}
                        className="object-cover w-full h-64 rounded-xl border border-white/10 cursor-zoom-in"
                        onClick={() => setLightbox(src)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {/* ── Reviews ─────────────────────────────────── */}
          {reviews.length > 0 && (
            <div>
              <h4 className="font-display text-accent text-lg mb-2">Client Reviews</h4>

              {/* custom arrow buttons */}
              <div className="relative">
                <button
                  ref={reviewPrev}
                  className="review-prev absolute -left-4 top-1/2 -translate-y-1/2
                             bg-white/10 hover:bg-white/20 backdrop-blur-md
                             p-2 rounded-full border border-white/20
                             text-accent"
                >
                  <FaChevronLeft size={18} />
                </button>
                <button
                  ref={reviewNext}
                  className="review-next absolute -right-4 top-1/2 -translate-y-1/2
                             bg-white/10 hover:bg-white/20 backdrop-blur-md
                             p-2 rounded-full border border-white/20
                             text-accent"
                >
                  <FaChevronRight size={18} />
                </button>

                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={{
                    prevEl: reviewPrev.current!,
                    nextEl: reviewNext.current!,
                  }}
                  onBeforeInit={(swiper) => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = reviewPrev.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = reviewNext.current;
                  }}
                  pagination={{ clickable: true }}
                  spaceBetween={24}
                  style={
                    {
                      '--swiper-pagination-color': accent,
                    } as React.CSSProperties
                  }
                  className="pl-8 pr-8" /* account for arrows */
                >
                  {reviews.map((r, i) => (
                    <SwiperSlide key={i}>
                      <motion.div
                        className="relative bg-white/5 border border-white/15
                                   p-6 rounded-xl backdrop-blur-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        <FaQuoteLeft className="absolute top-4 left-4 text-accent/70 text-3xl" />

                        <div className="ml-10 mb-2 flex items-center gap-2">
                          <span className="text-sm font-semibold">{r.author}</span>
                          {[...Array(5)].map((_, s) =>
                            s < r.rating ? (
                              <FaStar key={s} size={14} className="text-accent" />
                            ) : (
                              <FaRegStar key={s} size={14} className="text-white/40" />
                            )
                          )}
                        </div>

                        <blockquote className="ml-10 italic text-white/90 text-sm leading-snug">
                          “{r.text}”
                        </blockquote>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          )}

          {/* external link */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline text-sm"
            >
              Visit project →
            </a>
          )}
        </motion.div>
      </motion.div>

      {/* ── Lightbox (click image) ───────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-2 right-2 text-2xl text-white hover:text-accent"
              >
                <FaTimes />
              </button>

              <Swiper modules={[Zoom]} zoom={{ maxRatio: 3 }}>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <img
                      src={lightbox}
                      alt="Full view"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}
