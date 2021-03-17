import { IAddressProps } from "@interfaces/checkout";
import * as Yup from "yup";

interface Errors {
  [key: string]: string;
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
      .min(3, '"Nome" deve conter ao menos 3 letras.')
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
