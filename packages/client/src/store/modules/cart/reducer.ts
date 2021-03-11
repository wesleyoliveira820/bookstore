import { HYDRATE } from "next-redux-wrapper";
import produce from "immer";
import { IProductProps } from "@interfaces/products";

interface ICartProductProps extends IProductProps {
  quantity_cart: number;
}

interface IActionProps {
  type: string;
  payload: ICartProductProps;
}

const INITIAL_STATE: ICartProductProps[] = [];

const cartReducer = (
  state = INITIAL_STATE,
  action: IActionProps
): ICartProductProps[] => {
  switch (action.type) {
    case HYDRATE:
      return produce(state, (draft) => {
        draft.push(action.payload);
      });
    case "@cart/ADD_PRODUCT_SUCCESS":
      return produce(state, (draft) => {
        draft.push(action.payload);
      });
    case "@cart/UPDATE_QUANTITY_SUCCESS":
      const { quantity_cart, id } = action.payload;

      return produce(state, (draft) => {
        const productIndex = draft.findIndex((product) => product.id === id);

        if (productIndex >= 0) {
          draft[productIndex].quantity_cart = quantity_cart;
        }
      });
    default:
      return state;
  }
};

export default cartReducer;
