export function addProductToCartRequest(id: string) {
  return {
    type: "@cart/ADD_PRODUCT_REQUEST",
    id,
  };
}

export function updateProductQuantitySuccess(id: string, quantity: number) {
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
