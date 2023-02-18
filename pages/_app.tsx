import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PageTransitions from "../components/layout/Transition";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          // use javascript conditional expression
          color:
            theme.palette.mode === "dark" ? "#fff" : theme.palette.primary.main,
        }),
      },
    },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageTransitions>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <Component {...pageProps} />
        </PageTransitions>
      </ThemeProvider>
    </>
  );
}
