import { NextPage } from "next";

import Header from "@components/Header";
import ResumePurchase from "@components/ResumePurchase";
import Form from "./Form";

import { Container, Content } from "./styles";

const Shippment: NextPage = () => (
  <Container>
    <Header />
    <Content>
      <Form />
      <ResumePurchase />
    </Content>
  </Container>
);

export default Shippment;
