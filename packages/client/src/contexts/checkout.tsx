import { IAddressProps, ICreditCardProps } from "@interfaces/checkout";
import { FC, createContext, useState } from "react";
import { addressValidator, creditCardValidator } from "@validators/checkout";

interface ICheckoutProps {
  address: IAddressProps;
  payment: ICreditCardProps;
}

interface IContextProps {
  checkout: ICheckoutProps;
  setAddressInfo: (addressInfo: IAddressProps) => void;
  setPaymentInfo: (paymentInfo: ICreditCardProps) => void;
  deleteAllData: () => void;
}

const INITIAL_CONTEXT = {
  address: {
    name: "",
    email: "",
    zip_code: "",
    state: "",
    city: "",
    district: "",
    street: "",
    number: "",
  },
  payment: {
    card_number: "",
    name: "",
    expiry: "",
    cvv: "",
    cpf: "",
  },
};

export const CheckoutContext = createContext<IContextProps>({
  checkout: INITIAL_CONTEXT,
  setAddressInfo: () => null,
  setPaymentInfo: () => null,
  deleteAllData: () => null,
});

const CheckoutProvider: FC = ({ children }) => {
  const [checkout, setCheckout] = useState<ICheckoutProps>(INITIAL_CONTEXT);

  async function setAddressInfo(addressInfo: IAddressProps) {
    const validation = await addressValidator(addressInfo);

    if (validation) {
      throw validation;
    }

    setCheckout({ ...checkout, address: addressInfo });
  }

  async function setPaymentInfo(paymentInfo: ICreditCardProps) {
    const validation = await creditCardValidator(paymentInfo);

    if (validation) {
      throw validation;
    }

    setCheckout({ ...checkout, payment: paymentInfo });
  }

  function deleteAllData() {
    setCheckout(INITIAL_CONTEXT);
  }

  return (
    <CheckoutContext.Provider
      value={{ checkout, setAddressInfo, setPaymentInfo, deleteAllData }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
