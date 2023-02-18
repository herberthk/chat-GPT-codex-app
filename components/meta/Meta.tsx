import Head from "next/head";
import { FC } from "react";
interface Props {
  title?: string;
  keywords?: string;
  description?: string;
}
const Meta: FC<Props> = ({
  title = "Codex",
  keywords = "AI, openAi, chatGPT",
  description = "Codex is the AI assistant that answers questions assigned to it",
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
