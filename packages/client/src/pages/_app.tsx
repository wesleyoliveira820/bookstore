import { NextPage } from "next";
import type { AppProps } from "next/app";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
