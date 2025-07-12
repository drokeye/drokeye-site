import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Data {
  playing: boolean;
  progress?: number;
  duration?: number;
  title?: string;
  artist?: string;
  albumArt?: string;
  url?: string;
}

export default function NowPlaying() {
  const [data, setData] = useState<Data | null>(null);
  const baseColor = 'var(--color-accent)';

  const fetchTrack = async () => {
    try {
      const res = await fetch('https://nowplaying.iamisliterallyme.workers.dev/');
      const json = await res.json();
      setData(json);
    } catch {
      /* silent */
    }
  };

  useEffect(() => {
    fetchTrack();
    const id = setInterval(fetchTrack, 15_000);
    return () => clearInterval(id);
  }, []);

  /// progress calculation
  const pct =
    data?.playing && data.duration
      ? Math.min(100, ((data.progress ?? 0) / data.duration) * 100)
      : 0;

  if (!data) return null;                 // still loading
  if (!data.playing) return null;         // hide when nothing playing

  return (
    <motion.a
      href={data.url ?? '#'}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 15 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2
                 flex items-center gap-4 px-5 py-3 rounded-2xl
                 bg-white/10 backdrop-blur-lg border border-white/20
                 shadow-lg hover:bg-white/15 transition-colors z-40"
      style={{ width: 'clamp(280px, 60vw, 480px)' }}
    >
      <img
        src={data.albumArt ?? '/icon.png'}
        alt={data.title ?? ''}
        className="w-12 h-12 rounded shadow-inner object-cover"
      />

      <div className="flex-1 overflow-hidden">
        <p className="text-xs text-white/60 uppercase tracking-wide leading-none">
          Now playing
        </p>
        <p className="truncate font-medium text-accent">{data.title}</p>
        <p className="truncate text-xs text-white/80">{data.artist}</p>

        {/* progress bar */}
        <div className="h-1 w-full bg-white/20 rounded-full mt-1 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ ease: 'linear', duration: 0.5 }}
            style={{ backgroundColor: baseColor }}
            className="h-full"
          />
        </div>
      </div>

      {/* equalizer */}
      <div className="flex gap-1 w-4">
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
            className="w-1 bg-accent origin-bottom rounded pointer-events-none"
            style={{ height: '10px' }}
          />
        ))}
      </div>
    </motion.a>
  );
}
