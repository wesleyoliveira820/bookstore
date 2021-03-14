import { IProductProps } from "@interfaces/products";

interface IAddProductSuccessProps extends IProductProps {
  price_formatted: string;
  quantity_cart: number;
}

export function addProductToCartRequest(id: string) {
  return {
    type: "@cart/ADD_PRODUCT_REQUEST",
    id,
  };
}

export function addProductToCartSuccess(product: IAddProductSuccessProps) {
  return {
    type: "@cart/ADD_PRODUCT_SUCCESS",
    payload: product,
  };
}

export function updateQuantityProductRequest(id: string, quantity: number) {
  return {
    type: "@cart/UPDATE_QUANTITY_REQUEST",
    payload: {
      id,
      quantity_cart: quantity,
    },
  };
}

export function updateProductSuccess(id: string, quantity: number) {
  return {
    type: "@cart/UPDATE_QUANTITY_SUCCESS",
    payload: {
      id,
      quantity_cart: quantity,
    },
  };
}

export function removeProductFromCart(id: string) {
  return {
    type: "@cart/REMOVE_PRODUCT",
    payload: {
      id,
    },
  };
}
