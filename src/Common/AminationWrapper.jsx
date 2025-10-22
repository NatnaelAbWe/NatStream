import * as motion from "motion/react-client";
// import { motion } from "framer-motion";
export default function AnimationWrapper({ children, style }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
