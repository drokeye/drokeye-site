import { AnimatePresence, motion } from 'framer-motion';
import { marked } from 'marked';
import dedent from 'dedent';
import { useEffect } from 'react';

marked.setOptions({ gfm: true, breaks: true });

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date: string;
  content: string;
}

export default function WritingModal({
  isOpen,
  onClose,
  title,
  date,
  content,
}: Props) {
    useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto'; // ✨ always reset on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto
                     bg-white/10 backdrop-blur-lg border border-white/20
                     rounded-2xl p-8 shadow-2xl space-y-6"
          initial={{ scale: 0.95, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 40 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl text-white hover:text-accent"
          >
            ×
          </button>

          {/* Header */}
          <div className="space-y-1">
            <h2 className="text-3xl font-display text-accent">{title}</h2>
            <p className="text-sm text-white/60">{date}</p>
          </div>

          {/* Markdown content with custom styling */}
          <div
            className="markdown text-left"
            dangerouslySetInnerHTML={{ __html: marked(dedent(content)) }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
