import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import codeFormatter from "remark-code-frontmatter";

interface Props {
  isAi: boolean;
  text: string;
}
const Chat: FC<Props> = ({ isAi, text }) => {
  return (
    <div
      className={classNames(
        "flex justify-between",
        `${isAi && "flex-row-reverse"}`
      )}
    >
      <div
        className={classNames(
          "flex h-[60px] w-[60px] justify-center rounded-full text-center shadow-xl",
          `${isAi ? "bg-[#e74c3c]" : "bg-[#16a085]"}`
        )}
      >
        <Image
          src={isAi ? "/assets/bot.svg" : "/assets/user.svg"}
          alt={isAi ? "bot" : "user"}
          width={45}
          height={45}
          className="mt-1 h-[45px] w-[45px] rounded-full"
        />
      </div>

      <div className="w-[80%] break-words rounded-2xl p-3 text-left shadow-xl">
        <ReactMarkdown remarkPlugins={[codeFormatter]}>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Chat;
