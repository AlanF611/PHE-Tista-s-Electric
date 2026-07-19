import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';
import { companyInfo } from '../data';

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappText = encodeURIComponent(
    `Hi, I'd like to request a quote for an electrical project.`
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="flex flex-col items-end gap-2"
              >
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-electric-500 to-electric-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:from-electric-400 hover:to-electric-500 active:scale-95"
                >
                  <Phone className="h-4 w-4" />
                  Call now
                </a>
                <a
                  href={`https://wa.me/${companyInfo.phoneRaw.replace('+', '')}?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:from-emerald-400 hover:to-emerald-500 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setExpanded((v) => !v)}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-electric-500 to-electric-700 text-white shadow-glow ring-1 ring-inset ring-white/20"
            aria-label="Quick actions"
          >
            <span className="absolute inset-0 animate-pulse-glow rounded-full bg-electric-500/40" />
            <AnimatePresence mode="wait">
              {expanded ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X className="h-6 w-6" />
                </motion.span>
              ) : (
                <motion.span key="phone" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Phone className="h-6 w-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
