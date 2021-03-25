import { IAddressProps, ICreditCardProps } from "@interfaces/checkout";
import { FC, createContext, useState } from "react";
import { validateAddress, validatePaymentInfo } from "validators/checkout";

interface ICheckoutProps {
  address: IAddressProps;
  payment: ICreditCardProps;
}

interface IContextProps {
  checkout: ICheckoutProps;
  setAddressInfo: (addressInfo: IAddressProps) => void;
  setPaymentInfo: (paymentInfo: ICreditCardProps) => void;
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
});

const CheckoutProvider: FC = ({ children }) => {
  const [checkout, setCheckout] = useState<ICheckoutProps>(INITIAL_CONTEXT);

  async function setAddressInfo(addressInfo: IAddressProps) {
    const validation = await validateAddress(addressInfo);

    if (validation) {
      throw validation;
    }

    setCheckout({ ...checkout, address: addressInfo });
  }

  async function setPaymentInfo(paymentInfo: ICreditCardProps) {
    const validation = await validatePaymentInfo(paymentInfo);

    if (validation) {
      throw validation;
    }

    setCheckout({ ...checkout, payment: paymentInfo });
  }

  return (
    <CheckoutContext.Provider
      value={{ checkout, setAddressInfo, setPaymentInfo }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
