import { motion } from "framer-motion";
import { FC } from "react";
import { textVariant2 } from "../util/motion";

interface Props {
  text: string;
  color?: string;
  classes?: string;
}
export const TypingText: FC<Props> = ({ color, text, classes }) => {
  return (
    <>
      {Array.from(text).map((letter, index) => (
        <motion.span variants={textVariant2(0.5)} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </>
  );
};

export default TypingText;
