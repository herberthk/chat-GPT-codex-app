import React from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
interface Props {
  children: React.ReactNode;
}

const variants = {
  in: {
    scale: 0.8,
    y: 100,
    x: "100%",
    transition: {
      duration: 0.4,
    },
  },
  center: {
    x: 0,
    scale: 0.8,
    transformOrigin: "top",
    transition: {
      duration: 0.4,
    },
  },
  scaleUp: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.5,
    },
  },
  scaleDown: {
    scale: 0.8,
    y: 100,
    transition: {
      duration: 0.4,
    },
  },
  out: {
    opacity: 0,
    x: "-100%",
    transition: {
      duration: 0.4,
      delay: 0.5,
    },
  },
};

const PageTransitions: React.FC<Props> = ({ children }) => {
  const { asPath } = useRouter();
  // Remove animation for people with motion sickness
  // const shouldReduceMotion = useReducedMotion();

  return (
    <div className="z-10 h-[100vh] w-[100vw] overflow-hidden">
      <Image
        src="/assets/openAi.jpg"
        alt="OpenAi"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <AnimatePresence mode="wait" onExitComplete={() => window.scroll(0, 0)}>
        <motion.div
          key={asPath}
          // variants={!shouldReduceMotion ? variants : null}
          variants={variants}
          initial="in"
          animate={["center", "scaleUp"]}
          exit={["scaleDown", "out"]}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransitions;
// const Layout: FC<Props> = ({ children }) => (
//   <motion.div
//     initial={{ x: 300, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     exit={{ x: 300, opacity: 0 }}
//     transition={{
//       type: "spring",
//       stiffness: 260,
//       damping: 20,
//       duration: 0.5,
//     }}
//   >
//     {children}
//   </motion.div>
// );

// export default Layout;
