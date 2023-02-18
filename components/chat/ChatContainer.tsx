import Box from "@mui/material/Box";
import { useRef, useState, KeyboardEvent, useEffect } from "react";
import { MdOutlineSend } from "react-icons/md";
import TextArea from "../input/TextArea";
import HorizontalLoader from "../loaders/HolizontalLoader";
import { generateUniqueId } from "../util/helpers";
import Chat from "./Chat";
import Image from "next/image";
import Container from "@mui/material/Container";
import Header from "./Header";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
interface Data {
  isAi: boolean;
  text: string;
  id: string;
}

const ChatContainer = () => {
  const [data, setData] = useState<Data[]>([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const scrollBottom = () => ref.current?.scrollTo(0, ref.current.scrollHeight);
  useEffect(() => {
    scrollBottom();
  }, [data.length]);
  const onsubmit = async () => {
    if (prompt.trim() === "") {
      // console.log("Ask a question");
      return;
    }
    const copy = [...data];

    setData([...copy, { text: prompt, isAi: false, id: generateUniqueId() }]);
    setSubmitted(true);
    // scrollBottom();
    try {
      setLoading(true);
      const res = await (
        await fetch("/api", {
          method: "POST",
          body: JSON.stringify({ prompt }),
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();
      setPrompt("");
      setLoading(false);
      // console.log("response", res);
      setData((d) => [
        ...d,
        { text: res.bot, isAi: true, id: generateUniqueId() },
      ]);
      ref.current!.scrollTop = ref.current!.scrollHeight;
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
      setSubmitted(false);
      // scrollBottom();
    }
  };

  const onKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      onsubmit();
    }
  };

  return (
    <Box width="100vw" height="100vh" position="relative">
      <Image
        src="/assets/chatGpt.webp"
        alt="OpenAi"
        quality={100}
        fill
        sizes="100vw"
        style={{
          zIndex: -1,
        }}
      />
      <Container fixed>
        <Header
          text="Go home"
          to="/"
          otherClasses="shadow-lg shadow-cyan-500/50"
          color="#f9ca24"
        />
      </Container>
      <Container maxWidth="md">
        <div className="flex flex-col">
          <div
            className="scroller flex h-[70vh] w-full flex-col space-y-6 overflow-y-auto overflow-x-hidden px-6"
            ref={ref}
          >
            {!data.length && (
              <Typography
                fontFamily={`'Julee', cursive`}
                component={motion.p}
                initial={{ scale: 0, y: -300 }}
                animate={{ scale: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  // duration: 500,
                  delay: 0.8,
                }}
                className="flex justify-center text-center text-4xl text-white"
              >
                <TypeAnimation
                  sequence={["Chat messages will be here", 4000]}
                  //speed={75} // Custom Speed from 1-99 - Default Speed: 40
                  wrapper="span" // Animation will be rendered as a <span>
                />
              </Typography>
            )}
            {data.map(({ id, isAi, text }) => (
              <Chat
                isAi={isAi}
                text={text}
                key={id}
                scrollBottom={scrollBottom}
              />
            ))}
            {loading && <HorizontalLoader />}
          </div>
          <TextArea
            placeholder="Ask codex"
            inputClassName="mt-2 rounded-xl shadow-xl"
            onChange={(e) => setPrompt(e.target.value)}
            onKeyUp={onKeyUp}
            value={submitted ? "" : prompt}
            suffix={
              <button className="ml-2 mt-4 text-white" onClick={onsubmit}>
                <MdOutlineSend size={50} />
              </button>
            }
          />
        </div>
      </Container>
    </Box>
  );
};

export default ChatContainer;
