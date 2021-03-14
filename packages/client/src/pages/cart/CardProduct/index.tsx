import { FC } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";

import { IProductProps } from "@interfaces/products";

import {
  removeProductFromCart,
  updateProductRequest,
} from "@store/modules/cart/actions";
import {
  Container,
  CardImage,
  Content,
  ContentHeader,
  ContentFooter,
  ButtonTrash,
  ButtonQuantity,
} from "./styles";

interface ICartProductProps extends IProductProps {
  quantity_cart: number;
  price_formatted: string;
}

const CardProduct: FC<ICartProductProps> = ({
  id,
  title,
  cover_url,
  price_formatted,
  quantity_cart,
}) => {
  const dispatch = useDispatch();

  function handleRemoveProductFromCart() {
    dispatch(removeProductFromCart(id));
  }

  function handleDecrementQuantityProduct() {
    const newQuantity = quantity_cart - 1;

    dispatch(updateProductRequest(id, newQuantity));
  }

  function handleIncrementQuantityProduct() {
    const newQuantity = quantity_cart + 1;

    dispatch(updateProductRequest(id, newQuantity));
  }

  return (
    <Container>
      <CardImage>
        <div className="wrapper-image-product-cover">
          <Image
            src={cover_url}
            alt={title}
            width={85}
            height={116}
            layout="intrinsic"
          />
        </div>
      </CardImage>
      <Content>
        <ContentHeader>
          <div>
            <p className="title-product-cart">{title}</p>
            <strong className="price-product-cart">{price_formatted}</strong>
          </div>
          <ButtonTrash type="button" onClick={handleRemoveProductFromCart}>
            <FaRegTrashAlt className="trash-icon" size={18} />
          </ButtonTrash>
        </ContentHeader>

        <ContentFooter>
          <p className="quantity-cart-label">Quantidade:</p>
          <div className="container-control-quantity-cart">
            <ButtonQuantity
              type="button"
              onClick={handleDecrementQuantityProduct}
            >
              -
            </ButtonQuantity>
            <input value={quantity_cart} disabled />
            <ButtonQuantity
              type="button"
              onClick={handleIncrementQuantityProduct}
            >
              +
            </ButtonQuantity>
          </div>
        </ContentFooter>
      </Content>
    </Container>
  );
};

export default CardProduct;
