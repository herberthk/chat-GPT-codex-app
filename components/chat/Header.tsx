import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
interface Props {
  to: string;
  text: string;
  otherClasses?: string;
  color: string;
}
const Header: FC<Props> = ({ text, to, otherClasses, color }) => {
  const router = useRouter();
  return (
    <Stack
      py={7}
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
    >
      <Typography
        component={motion.p}
        initial={{ x: 18000 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          // duration: 500,
        }}
        fontFamily={`'Monoton', cursive`}
        fontSize={34}
        fontWeight={800}
        color={color}
        className={otherClasses}
      >
        CODEX
      </Typography>
      <Button
        component={motion.button}
        initial={{ scale: 0, rotate: 180 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
        sx={{
          borderRadius: "20px",
          color: "#fff",
          borderColor: "#fff",
          fontWeight: "bold",
          //   boxShadow: "0 0 20px #1B1464",
          "&:hover": {
            backgroundColor: "#4834d4",
            borderColor: "#fff",
          },
        }}
        size="large"
        variant="outlined"
        endIcon={<SendIcon />}
        LinkComponent={Link}
        href={to}
        onClick={() => router.push(to)}
      >
        {text}
      </Button>
    </Stack>
  );
};

export default Header;
