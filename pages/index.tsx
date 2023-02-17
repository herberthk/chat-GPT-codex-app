import Head from "next/head";
import Landing from "../components/home/Landing";

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
      <Landing />
    </>
  );
}
