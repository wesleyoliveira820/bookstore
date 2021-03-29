import { NextPage } from "next";

import Header from "@components/Header";
import ResumePurchase from "@components/ResumePurchase";
import Button from "@components/Button";

import TableInfo from "./TableInfo";

import { Container, Content } from "./styles";

const ConfirmCheckout: NextPage = () => (
  <Container>
    <Header />
    <Content>
      <div id="container-table-button">
        <TableInfo />
        <div id="button-container">
          <Button size="large">Confirmar e fazer pedido</Button>
        </div>
      </div>
      <ResumePurchase />
    </Content>
  </Container>
);

export default ConfirmCheckout;
