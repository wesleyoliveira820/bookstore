import { NextPage } from "next";
import { FaRegCreditCard } from "react-icons/fa";

import Header from "@components/Header";
import ResumePurchase from "@components/ResumePurchase";
import FormCreditCard from "./FormCreditCard";

import "react-credit-cards/es/styles-compiled.css";

import {
  Container,
  Content,
  OptionContainer,
  OptionCreditCard,
} from "./styles";

const Payment: NextPage = () => (
  <Container>
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

export default Payment;
