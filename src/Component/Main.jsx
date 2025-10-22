import * as motion from "motion/react-client";
import AnimationWrapper from "../Common/AminationWrapper";

export default function MainSection() {
  const box = {
    width: 200,
    padding: 20,
    backgroundColor: "#9911ff",
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  };

  return (
    <AnimationWrapper style={box}>
      <motion.h2
        whileTap={{ scale: 1.2, color: "#ffcc00" }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        hi
      </motion.h2>
      <motion.h2
        whileTap={{ scale: 1.2, color: "#ffcc00" }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        bye
      </motion.h2>
      <motion.h2
        whileTap={{ scale: 1.2, color: "#ffcc00" }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        bye
      </motion.h2>
    </AnimationWrapper>
  );
}
