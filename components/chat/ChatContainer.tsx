import { useRef, useState, KeyboardEvent } from "react";
import { MdOutlineSend } from "react-icons/md";
import TextArea from "../input/TextArea";
import HorizontalLoader from "../loaders/HolizontalLoader";
import { generateUniqueId } from "../util/helpers";
import Chat from "./Chat";
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
  const onsubmit = async () => {
    if (prompt.trim() === "") {
      // console.log("Ask a question");
      return;
    }
    const copy = [...data];

    setData([...copy, { text: prompt, isAi: false, id: generateUniqueId() }]);
    setSubmitted(true);
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
    }
  };

  const onKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      onsubmit();
    }
  };
  // console.log("data", data);
  // oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"
  return (
    <>
      <div
        className="scroller flex w-full flex-1 flex-col space-y-6 overflow-y-auto p-4"
        ref={ref}
      >
        <div className="mx-auto mb-3 max-w-sm p-3 shadow-md">
          <p className="p-3 text-2xl uppercase">Chat-GPT Codex app</p>
        </div>
        {data.map(({ id, isAi, text }) => (
          <Chat isAi={isAi} text={text} key={id} />
        ))}
        {loading && <HorizontalLoader />}
      </div>
      <TextArea
        onInput={(e) =>
          (e.currentTarget.style.height = e.currentTarget.scrollHeight + "px")
        }
        placeholder="Ask codex"
        inputClassName="mt-2 rounded-lg shadow-xl"
        onChange={(e) => setPrompt(e.target.value)}
        onKeyUp={onKeyUp}
        value={submitted ? "" : prompt}
        suffix={
          <button className="ml-2 mt-4" onClick={onsubmit}>
            <MdOutlineSend size={50} />
          </button>
        }
        // prefix={
        //   <button className="mr-2 mt-4">
        //     <MdOutlinePeople size={50} className="text-white" />
        //   </button>
        // }
      />
    </>
  );
};

export default ChatContainer;
