import { FC, useRef } from "react";
import { FormHandles, SubmitHandler } from "@unform/core";

import InputText from "@components/InputText";
import Button from "@components/Button";

import useCheckout from "hooks/useCheckout";
import { Container, Form } from "./styles";

interface IAddressProps {
  name: string;
  email: string;
  zip_code: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number?: string;
}

const ShippmentForm: FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { setAddressInfo } = useCheckout();

  const handleOnSubmit: SubmitHandler<IAddressProps> = async (addressInfo) => {
    formRef.current?.setErrors({});

    try {
      await setAddressInfo(addressInfo);
    } catch (errors) {
      formRef.current?.setErrors(errors);
    }
  };

  return (
    <Container>
      <h4 id="title-shippment">Adicionar informações de envio</h4>
      <Form ref={formRef} onSubmit={handleOnSubmit}>
        <InputText name="name" placeholder="Nome Completo" autoFocus />
        <InputText name="email" placeholder="Seu melhor email" />
        <InputText name="zip_code" placeholder="CEP" />

        <div className="align-input-row">
          <InputText name="state" placeholder="Estado" />
          <InputText name="city" placeholder="Cidade" />
        </div>

        <InputText name="district" placeholder="Bairro" />

        <div className="align-input-row">
          <InputText name="street" placeholder="Rua/Avenida" />
          <InputText name="number" placeholder="Número" />
        </div>

        <div id="button-container">
          <Button size="large">Próximo</Button>
        </div>
      </Form>
    </Container>
  );
};

export default ShippmentForm;
