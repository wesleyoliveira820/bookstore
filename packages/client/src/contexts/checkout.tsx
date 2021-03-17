import { FC, createContext, useState } from "react";
import { validateAddress } from "validators/checkout";

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

interface ICheckoutProps {
  address: IAddressProps;
}

interface IContextProps {
  checkout: ICheckoutProps;
  setAddressInfo: (addressInfo: IAddressProps) => void;
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
  },
};

export const CheckoutContext = createContext<IContextProps>({
  checkout: INITIAL_CONTEXT,
  setAddressInfo: () => null,
});

const CheckoutProvider: FC = ({ children }) => {
  const [checkout, setCheckout] = useState<ICheckoutProps>(INITIAL_CONTEXT);

  async function setAddressInfo(addressInfo: IAddressProps) {
    const validation = await validateAddress(addressInfo);

    if (validation) {
      throw validation;
    }

    setCheckout({ address: addressInfo });
  }

  return (
    <CheckoutContext.Provider value={{ checkout, setAddressInfo }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
