import { NextPage } from "next";
import Head from "next/head";

import Header from "@components/Header";
import ResumePurchase from "@components/ResumePurchase";
import Button from "@components/Button";

import useCheckout from "@hooks/useCheckout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import TableInfo from "./TableInfo";

import { Container, Content } from "./styles";

type CheckoutProperty = "address" | "payment";

const ConfirmCheckout: NextPage = () => {
  const { checkout } = useCheckout();
  const router = useRouter();

  function objectIsEmpty(objectProperty: CheckoutProperty) {
    const values = Object.values(checkout[objectProperty]);

    if (values.includes("")) {
      return true;
    }

    return false;
  }

  useEffect(() => {
    if (objectIsEmpty("address") || objectIsEmpty("payment")) {
      router.push("/products");
    }
  }, []);

  return (
    <Container>
      <Head>
        <title>Confirmar informações</title>
      </Head>
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
};

export default ConfirmCheckout;
