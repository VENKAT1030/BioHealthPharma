import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

export default function Reveal({
  children,
  as = "div",
  variants = fadeUp,
  delay = 0,
  className = "",
  once = true,
  amount = 0.2,
}) {
  // Fallback to div if an invalid motion component is passed
  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once,
        amount,
      }}
      transition={{
        delay,
      }}
    >
      {children}
    </MotionComponent>
  );
}