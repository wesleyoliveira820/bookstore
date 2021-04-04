import { useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { FaRegCreditCard } from "react-icons/fa";

import Header from "@components/Header";
import ResumePurchase from "@components/ResumePurchase";
import { IReduxState } from "@interfaces/redux";

import FormCreditCard from "./FormCreditCard";

import "react-credit-cards/es/styles-compiled.css";

import {
  Container,
  Content,
  OptionContainer,
  OptionCreditCard,
} from "./styles";

const Payment: NextPage = () => {
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
        <title>Informações de pagamento</title>
      </Head>
      <Header />
      <Content>
        <OptionContainer>
          <h4 id="title-payment">Como prefere pagar?</h4>
          <p id="subtitle-payment">Com mercado pago</p>
          <OptionCreditCard>
            <div className="header-option-card">
              <input
                type="radio"
                name="payment-credit-card"
                value="credit-card"
                readOnly
                checked
              />
              <FaRegCreditCard size={24} />
              <p>Novo cartão de crédito</p>
            </div>
            <FormCreditCard />
          </OptionCreditCard>
        </OptionContainer>
        <ResumePurchase />
      </Content>
    </Container>
  );
};

export default Payment;
