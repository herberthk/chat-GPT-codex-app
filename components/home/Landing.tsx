import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "next/image";
import Header from "../chat/Header";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Landing = () => {
  const text = `This application is powered by Chat-GPT3 Artificial intelligence
  models that can answer almost all questions asked to it. It can also
  assist you in writing code for major programming languages, writing
  tests, and debugging`;
  return (
    <Box width="100vw" height="100vh" position="relative">
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
      <Container fixed>
        <Header text="Start chat" to="/chat" color="#fff" />
        <Typography
          fontFamily={`'Julee', cursive`}
          fontSize={34}
          color="#fff"
          boxShadow="0 0 20px #34bfff"
          maxWidth="sm"
          p={1.4}
          component={motion.p}
          initial={{ scale: 0, rotate: 180 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          Experience the power of Chat-GPT Artificial intelligence models from
          openAI
        </Typography>
        <Typography
          mt={6}
          p={3}
          borderRadius={5}
          fontSize={27}
          fontFamily={`'Julee', cursive`}
          color="#fff"
          boxShadow="0 0 20px #34bfff"
          maxWidth="sm"
          component={motion.p}
          initial={{ scale: 0, y: -1800 }}
          animate={{ y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <TypeAnimation
            sequence={[text, 3000]}
            //cursor={false}
            //speed={75} // Custom Speed from 1-99 - Default Speed: 40
            wrapper="span" // Animation will be rendered as a <span>
          />
        </Typography>
      </Container>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        width="100%"
        height={300}
        bgcolor="#fff"
        sx={{
          opacity: 0.2,
          clipPath:
            "polygon(51% 79%, 77% 95%, 100% 81%, 100% 100%, 79% 100%, 50% 100%, 0 100%, 0 93%, 9% 83%, 25% 95%)",
        }}
      />
    </Box>
  );
};

export default Landing;
