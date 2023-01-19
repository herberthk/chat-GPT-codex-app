import Head from "next/head";
import ChatContainer from "../components/chat/ChatContainer";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Codex</title>
        <meta
          name="description"
          content="Codex is the AI assistant that answers questions asigned to it"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container flex h-[100vh] flex-col justify-between pb-5 text-center">
        <ChatContainer />
      </main>
    </>
  );
}
