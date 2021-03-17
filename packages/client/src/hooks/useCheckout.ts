import { useContext } from "react";
import { CheckoutContext } from "@contexts/checkout";

const useCheckout = () => {
  const context = useContext(CheckoutContext);

  return context;
};

export default useCheckout;
