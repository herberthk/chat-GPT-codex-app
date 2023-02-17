import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import { TypeAnimation } from "react-type-animation";
import useResizeObserver from "use-resize-observer";
import { motion } from "framer-motion";

interface Props {
  isAi: boolean;
  text: string;
  scrollBottom: () => void;
}
// const now = new Date();
const Chat: FC<Props> = ({ isAi, text, scrollBottom }) => {
  const { ref } = useResizeObserver<HTMLDivElement>({
    onResize: () => scrollBottom(),
  });

  // const ref = useRef<HTMLDivElement>(null);
  // const resizeOnserver = new ResizeObserver((entries) => {
  //   // since we are observing only a single element, so we access the first element in entries array
  //   let rect = entries[0].contentRect;
  //   // current width & height
  //   let width = rect.width;
  //   let height = rect.height;
  //   scrollBottom();
  //   console.log("Current Width : " + width);
  //   console.log("Current Height : " + height);
  // });

  // resizeOnserver.observe(ref.current);

  return (
    <motion.div
      initial={{ y: -1800 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        // duration: 500,
      }}
      className={classNames(
        "flex justify-between",
        `${isAi && "flex-row-reverse space-x-4"}`
      )}
    >
      <div
        className={classNames(
          "flex h-[60px] w-[60px] justify-center rounded-full text-center shadow-xl",
          `${!isAi ? "bg-[#e74c3c]" : "bg-[#16a085]"}`
        )}
      >
        <Image
          src={isAi ? "/assets/clogo.png" : "/assets/user.svg"}
          alt={isAi ? "bot" : "user"}
          width={45}
          height={45}
          className="mt-[0.5rem] h-[45px] w-[45px] rounded-full"
        />
      </div>

      <div
        className={classNames(
          "max-w-[75%] break-words rounded-2xl  p-3 text-left shadow-xl",
          isAi ? "bg-white" : "bg-[#6ab04c]",
          isAi ? "text-black" : "text-white"
        )}
        ref={ref}
      >
        {isAi ? (
          <TypeAnimation
            sequence={[text, 500]}
            cursor={false}
            speed={75} // Custom Speed from 1-99 - Default Speed: 40
            wrapper="span" // Animation will be rendered as a <span>
          />
        ) : (
          <span>{text}</span>
        )}

        {/* <ReactMarkdown remarkPlugins={[codeFormatter]}>{text}</ReactMarkdown> */}
        {/* <p>
          <TimeAgo date={now} />
        </p> */}
      </div>
    </motion.div>
  );
};

export default Chat;
