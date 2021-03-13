import { call, select, put, all, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import Router from "next/router";

import axios from "@services/axios";
import { IProductProps } from "@interfaces/products";

import { formatPrice } from "@utils/fotmat";
import { updateProductQuantitySuccess } from "./actions";

interface IActionProps {
  type: string;
  id: string;
}

interface IUpdateQuantityProps {
  type: string;
  payload: {
    id: string;
    quantity_cart: number;
  };
}

interface IServerProductProps extends IProductProps {
  quantity_stock: number;
}

interface ICartProductProps extends IProductProps {
  quantity_cart: number;
}

interface IStateProps {
  cart: IServerProductProps[];
}

function* addProductToCart(action: IActionProps) {
  const productExistsInCart: ICartProductProps = yield select(
    (state: IStateProps) =>
      state.cart.find((product) => product.id === action.id)
  );

  const product: AxiosResponse<IServerProductProps> = yield call(
    axios.get,
    `/stock/${action.id}`
  );

  const quantityInStock = product.data.quantity_stock;

  const currentQuantityInCart = productExistsInCart
    ? productExistsInCart.quantity_cart
    : 0;

  const newQuantityCart = currentQuantityInCart + 1;

  if (newQuantityCart > quantityInStock) {
    return toast.error("A quantidade solicitada está fora de estoque.");
  }

  if (productExistsInCart) {
    yield put(
      updateProductQuantitySuccess(productExistsInCart.id, newQuantityCart)
    );

    Router.push("/cart");

    return;
  }

  yield put({
    type: "@cart/ADD_PRODUCT_SUCCESS",
    payload: {
      ...product.data,
      price_formatted: formatPrice(parseFloat(product.data.unit_price)),
      quantity_cart: newQuantityCart,
    },
  });

  Router.push("/cart");
}

function* updateQuantityProduct({ payload }: IUpdateQuantityProps) {
  if (payload.quantity_cart <= 0) return;

  const product: AxiosResponse<IServerProductProps> = yield call(
    axios.get,
    `/stock/${payload.id}`
  );

  const { quantity_stock } = product.data;

  if (payload.quantity_cart > quantity_stock) {
    return toast.error("A quantidade solicitada está fora de estoque.");
  }

  yield put(updateProductQuantitySuccess(payload.id, payload.quantity_cart));
}

export default all([
  takeLatest("@cart/ADD_PRODUCT_REQUEST", addProductToCart),
  takeLatest("@cart/UPDATE_QUANTITY_REQUEST", updateQuantityProduct),
]);
