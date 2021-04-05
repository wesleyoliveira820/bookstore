import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "@components/Header";
import ResumePurchase from "@components/ResumePurchase";
import Button from "@components/Button";
import useCheckout from "@hooks/useCheckout";
import { deleteAllCart } from "@store/modules/cart/actions";

import TableInfo from "./TableInfo";
import ModalConfirmPurchase from "./ModalConfirmPurchase";

import { Container, Content } from "./styles";

type CheckoutProperty = "address" | "payment";

const ConfirmCheckout: NextPage = () => {
  const { checkout } = useCheckout();
  const dispatch = useDispatch();
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);

  function objectIsEmpty(objectProperty: CheckoutProperty) {
    const values = Object.values(checkout[objectProperty]);

    if (values.includes("")) {
      return true;
    }

    return false;
  }

  function handleConfirmPurchase() {
    dispatch(deleteAllCart());
    setShowModal(true);
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
            <Button size="large" onClick={handleConfirmPurchase}>
              Confirmar e fazer pedido
            </Button>
          </div>
        </div>
        <ResumePurchase />
      </Content>
      {showModal && <ModalConfirmPurchase />}
    </Container>
  );
};

export default ConfirmCheckout;
