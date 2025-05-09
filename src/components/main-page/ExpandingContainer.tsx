import { motion, MotionProps } from "framer-motion";
import React from "react";

interface AnimatedContainerProps extends MotionProps {
  children: React.ReactNode;
  containerAnimDuration: number;
  className?: string;
}

const ExpandingContainer: React.FC<AnimatedContainerProps> = ({
  children,
  containerAnimDuration,
  className = "",
  ...rest
}) => {
  return (
    <motion.div
      className={`z-10 bg-transparent backdrop-blur-[2px] rounded-3xl p-4 m-1 w-full h-[90vh] max-w-[80%] mx-auto flex flex-col border-2 border-solid shadow-2xl shadow-white/5 origin-center ${className}`}
      initial={{
        scaleX: 0,
        scaleY: 0.1,
        opacity: 1,
        backgroundColor: "rgb(255,255,255,0.5)",
      }}
      animate={{
        scaleX: [0, 1, 1],
        scaleY: [0.1, 0.1, 1],
        opacity: [1, 0.4, 1],
        backgroundColor: [
          "rgb(255,255,255,0.5)",
          "rgb(51,51,51,0.5)",
          "rgb(51, 51, 51,0.1)",
        ],
      }}
      transition={{
        duration: containerAnimDuration,
        ease: "easeInOut",
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default ExpandingContainer;