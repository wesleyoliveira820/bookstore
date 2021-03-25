import { IAddressProps } from "@interfaces/checkout";
import { FC, createContext, useState } from "react";
import { validateAddress, validatePaymentInfo } from "validators/checkout";

interface IDataCardProps {
  card_number: string;
  name: string;
  cvv: number;
  cpf: string;
  expiry: string;
}

interface ICheckoutProps {
  address: IAddressProps;
  payment: IDataCardProps;
}

interface IContextProps {
  checkout: ICheckoutProps;
  setAddressInfo: (addressInfo: IAddressProps) => void;
  setPaymentInfo: (paymentInfo: IDataCardProps) => void;
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
    cvv: 0,
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

  async function setPaymentInfo(paymentInfo: IDataCardProps) {
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
