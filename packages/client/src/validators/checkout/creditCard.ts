import * as Yup from "yup";
import { ICreditCardProps } from "@interfaces/checkout";

interface Errors {
  [key: string]: string;
}

async function creditCardValidator(paymentInfo: ICreditCardProps) {
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

export default creditCardValidator;
