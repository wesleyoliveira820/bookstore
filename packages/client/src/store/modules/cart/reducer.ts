import { IProductProps } from "@interfaces/products";
import { HYDRATE } from "next-redux-wrapper";

interface IActionProps {
  type: string;
  payload: IProductProps;
}

const INITIAL_STATE: IProductProps[] = [];

const cartReducer = (
  state = INITIAL_STATE,
  action: IActionProps
): IProductProps[] => {
  switch (action.type) {
    case HYDRATE:
      return [...state, action.payload];
    case "@TEST_SUCCESS":
      return state;
    default:
      return state;
  }
};

export default cartReducer;
