import { call, select, put, all, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import Router from "next/router";

import axios from "@services/axios";
import { ICartProductProps, IServerProductProps } from "@interfaces/products";
import { formatPrice } from "@utils/fotmat";

import { addProductToCartSuccess, updateProductSuccess } from "./actions";

interface IActionProps {
  type: string;
  id: string;
}

interface IPayloadProps {
  id: string;
  quantity_cart: number;
}

interface IUpdateQuantityProps {
  type: string;
  payload: IPayloadProps;
}

interface IStateProps {
  cart: IServerProductProps[];
}

type ProductAPIResponse = AxiosResponse<IServerProductProps>;

function* getProductStock(id: string) {
  const product: ProductAPIResponse = yield call(axios.get, `/stock/${id}`);
  return product;
}

function* addProductToCart(action: IActionProps) {
  const productExistsInCart: ICartProductProps = yield select(
    (state: IStateProps) =>
      state.cart.find((product) => product.id === action.id)
  );

  const product: ProductAPIResponse = yield getProductStock(action.id);

  const quantityInStock = product.data.quantity_stock;

  const currentQuantityInCart = productExistsInCart
    ? productExistsInCart.quantity_cart
    : 0;

  const newQuantityCart = currentQuantityInCart + 1;

  if (newQuantityCart > quantityInStock) {
    return toast.error("A quantidade solicitada está fora de estoque.");
  }

  if (productExistsInCart) {
    yield put(updateProductSuccess(productExistsInCart.id, newQuantityCart));
    Router.push("/cart");

    return;
  }

  const unitPriceParsed = parseFloat(product.data.unit_price);

  const priceFormatted = formatPrice(unitPriceParsed);

  yield put(
    addProductToCartSuccess({
      ...product.data,
      price_formatted: priceFormatted,
      quantity_cart: newQuantityCart,
    })
  );

  Router.push("/cart");
}

function* updateQuantityProduct({ payload }: IUpdateQuantityProps) {
  if (payload.quantity_cart <= 0) return;

  const product: ProductAPIResponse = yield getProductStock(payload.id);

  const quantityStock = product.data.quantity_stock;

  if (payload.quantity_cart > quantityStock) {
    return toast.error("A quantidade solicitada está fora de estoque.");
  }

  yield put(updateProductSuccess(payload.id, payload.quantity_cart));
}

export default all([
  takeLatest("@cart/ADD_PRODUCT_REQUEST", addProductToCart),
  takeLatest("@cart/UPDATE_QUANTITY_REQUEST", updateQuantityProduct),
]);
