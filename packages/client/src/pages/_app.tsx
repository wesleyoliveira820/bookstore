import { NextPage } from "next";
import type { AppProps } from "next/app";
import { storeWrapper } from "@store/index";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import themeLight from "../themes/light";
import GlobalStyles from "../styles/global";

import "react-toastify/dist/ReactToastify.css";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={{ colors: themeLight }}>
    <GlobalStyles />
    <ToastContainer position="bottom-left" limit={1} />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default storeWrapper.withRedux(MyApp);
