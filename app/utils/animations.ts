import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      delay: custom,
      ease: "easeOut",
    },
  }),
};

export const bgFade: Variants = {
  hidden: {
    backgroundColor: "rgba(0,0,0,0.3)",
    backdropFilter: "blur(0px)",
  },
  visible: (custom: number = 0) => ({
    backgroundColor: "rgba(0,0,0,0.9)",
    backdropFilter: "blur(5px)",
    transition: {
      duration: 1.2,
      delay: custom,
      ease: "easeInOut",
    },
  }),
};
