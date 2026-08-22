import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function Counter({
  to = 100,
  suffix = "",
  duration = 1.8,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, to, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {value.toLocaleString()}
      {suffix}
    </motion.span>
  );
}