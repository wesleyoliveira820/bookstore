import { NextPage } from "next";
import Head from "next/head";

import Header from "@components/Header";
import ResumePurchase from "@components/ResumePurchase";
import Form from "./Form";

import { Container, Content } from "./styles";

const Shippment: NextPage = () => (
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

export default Shippment;
