import { NextPage } from "next";
import type { AppProps } from "next/app";
import { storeWrapper } from "@store/index";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/global";
import themeLight from "../themes/light";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={{ colors: themeLight }}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default storeWrapper.withRedux(MyApp);
