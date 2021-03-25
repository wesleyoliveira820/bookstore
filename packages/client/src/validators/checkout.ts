import { IAddressProps } from "@interfaces/checkout";
import * as Yup from "yup";

interface Errors {
  [key: string]: string;
}

interface IDataCardProps {
  card_number: string;
  name: string;
  cvv: number;
  cpf: string;
  expiry: string;
}

export async function validateAddress(
  addressInfo: IAddressProps
): Promise<Errors | void> {
  const schema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        '"Nome" deve conter apenas letras.'
      )
      .required("Este campo é obrigatório."),

    email: Yup.string()
      .required("Este campo é obrigatório.")
      .email("Este email é inválido."),

    zip_code: Yup.string()
      .matches(/[0-9]{5}[\d]{3}/g, "Este CEP é inválido.")
      .required("Este campo é obrigatório."),

    state: Yup.string()
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        '"Estado" deve conter apenas letras.'
      )
      .required("Este campo é obrigatório."),

    city: Yup.string()
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        '"Cidade" deve conter apenas letras.'
      )
      .required("Este campo é obrigatório."),

    district: Yup.string()
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        '"Bairro" deve conter apenas letras.'
      )
      .required("Este campo é obrigatório."),

    street: Yup.string()
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        '"Rua/Avenida" deve conter apenas letras.'
      )
      .required("Este campo é obrigatório."),

    number: Yup.string()
      .matches(
        /^[A-Za-z0-9]*\d+[A-Za-z0-9]*$/,
        '"Número" deve conter números e letras.'
      )
      .required("Este campo é obrigatório."),
  });

  try {
    await schema.validate(addressInfo, {
      abortEarly: false,
    });
  } catch (errors) {
    if (errors instanceof Yup.ValidationError) {
      const validationErrors: Errors = {};

      errors.inner.forEach(({ path = "", message }) => {
        validationErrors[path] = message;
      });

      return validationErrors;
    }
  }
}

export async function validatePaymentInfo(paymentInfo: IDataCardProps) {
  const schema = Yup.object().shape({
    card_number: Yup.string()
      .matches(/^[0-9]+$/, "Este campo deve conter apenas números.")
      .min(16, "O número do cartão é inválido.")
      .max(16, "O número do cartão é inválido.")
      .required("Este campo é obrigatório."),

    name: Yup.string()
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        '"Nome" deve conter apenas letras.'
      )
      .required("Este campo é obrigatório."),

    expiry: Yup.string().required("Este campo é obrigatório."),

    cvv: Yup.string()
      .matches(/^[0-9]+$/, "Este campo deve conter apenas números.")
      .min(3, "O CVV deve conter 3 números.")
      .max(3, "O CVV deve conter 3 números.")
      .required("Este campo é obrigatório."),

    cpf: Yup.string()
      .matches(/(\d{3})(\d{3})(\d{3})(\d{2})/, "Este CPF é inválido.")
      .required("Este campo é obrigatório."),
  });

  try {
    await schema.validate(paymentInfo, {
      abortEarly: false,
    });
  } catch (errors) {
    if (errors instanceof Yup.ValidationError) {
      const validationErrors: Errors = {};

      errors.inner.forEach(({ path = "", message }) => {
        validationErrors[path] = message;
      });

      return validationErrors;
    }
  }
}
