import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { easeOut } from "../animations/variants";

const NAME = "BIO HEALTH PHARMA";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const totalDuration = 2400;

    let frame;
    let timer;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / totalDuration) * 100);

      setProgress(pct);

      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setExiting(true);

        timer = setTimeout(() => {
          onFinish?.();
        }, 500);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      if (timer) clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy"
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: easeOut,
            },
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: easeOut,
            }}
          >
            <Logo variant="light" size={70} />
          </motion.div>

          {/* Company Name */}
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-x-2 px-6 font-heading text-xl font-semibold tracking-[0.18em] text-white md:text-2xl"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.045,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            {NAME.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 10,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="mt-3 text-xs font-medium uppercase tracking-[0.3em] text-medgreen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.1,
              duration: 0.6,
            }}
          >
            Trusted Pharmaceutical Solutions
          </motion.p>

          {/* Progress Bar */}
          <div className="mt-10 h-[2px] w-40 overflow-hidden rounded-full bg-white/15">
            <motion.div
              className="h-full bg-medgreen"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}