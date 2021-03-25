import { FC, useState, ChangeEvent, useRef } from "react";
import Card from "react-credit-cards";
import { FormHandles, SubmitHandler } from "@unform/core";

import InputMask from "@components/InputMask";
import InputText from "@components/InputText";
import Button from "@components/Button";
import useCheckout from "@hooks/useCheckout";
import { ICreditCardProps } from "@interfaces/checkout";

import { Container, Form } from "./styles";

const PaymentFormCreditCard: FC = () => {
  const initial_state = {
    name: "",
    card_number: "",
    cvv: "",
    cpf: "",
    expiry: "",
  };

  const formRef = useRef<FormHandles>(null);
  const { setPaymentInfo } = useCheckout();
  const [card, setCard] = useState<ICreditCardProps>(initial_state);
  const [focusCVV, setFocusCVV] = useState<boolean>(false);

  const handleSubmitForm: SubmitHandler<ICreditCardProps> = async (
    dataCard
  ) => {
    formRef.current?.setErrors({});

    try {
      await setPaymentInfo(dataCard);
    } catch (errors) {
      formRef.current?.setErrors(errors);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  function handleFocusCVV() {
    setFocusCVV(!focusCVV);
  }

  return (
    <Container>
      <p id="title-form">Insira os dados do cartão</p>
      <Card
        name={card.name}
        number={card.card_number}
        expiry={card.expiry}
        cvc={card?.cvv}
        placeholders={{ name: "Nome completo" }}
        locale={{ valid: "Expira em" }}
        focused={focusCVV ? "cvc" : "name"}
      />
      <Form ref={formRef} onSubmit={handleSubmitForm}>
        <InputText
          name="card_number"
          placeholder="Número do cartão"
          maxLength={16}
          onChange={handleInputChange}
        />
        <InputText
          name="name"
          placeholder="Nome completo (Como no cartão)"
          onChange={handleInputChange}
        />
        <div className="align-input-row">
          <InputMask
            mask="99/99"
            name="expiry"
            placeholder="Data de vencimento"
            onChange={handleInputChange}
          />
          <InputText
            name="cvv"
            placeholder="Código de segurança"
            onFocus={handleFocusCVV}
            onChange={handleInputChange}
            maxLength={3}
            onBlur={handleFocusCVV}
          />
        </div>
        <InputText
          name="cpf"
          placeholder="CPF do titular do cartão"
          maxLength={11}
        />
        <div id="button-container">
          <Button size="large">Próximo</Button>
        </div>
      </Form>
    </Container>
  );
};

export default PaymentFormCreditCard;
