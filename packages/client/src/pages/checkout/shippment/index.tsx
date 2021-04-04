import { useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import Header from "@components/Header";
import ResumePurchase from "@components/ResumePurchase";
import { IReduxState } from "@interfaces/redux";

import Form from "./Form";

import { Container, Content } from "./styles";

const Shippment: NextPage = () => {
  const { cart } = useSelector((state: IReduxState) => state);
  const router = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/products");
    }
  }, []);

  return (
    <Container>
      <Head>
        <title>Informações de envio</title>
      </Head>
      <Header />
      <Content>
        <Form />
        <ResumePurchase />
      </Content>
    </Container>
  );
};

export default Shippment;
