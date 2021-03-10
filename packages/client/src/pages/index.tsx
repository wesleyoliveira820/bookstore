import { NextPage } from "next";
import { useEffect } from "react";
import Router from "next/router";

const Home: NextPage = () => {
  useEffect(() => {
    Router.push("/products");
  }, []);

  return null;
};

export default Home;
