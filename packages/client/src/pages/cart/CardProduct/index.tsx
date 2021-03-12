import { FC } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";

import { IProductProps } from "@interfaces/products";

import { removeProductFromCart } from "@store/modules/cart/actions";
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
}

const CardProduct: FC<ICartProductProps> = ({
  id,
  title,
  cover_url,
  unit_price,
  quantity_cart,
}) => {
  const dispatch = useDispatch();

  function handleRemoveProductFromCart() {
    dispatch(removeProductFromCart(id));
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
            <strong className="price-product-cart">{unit_price}</strong>
          </div>
          <ButtonTrash type="button" onClick={handleRemoveProductFromCart}>
            <FaRegTrashAlt className="trash-icon" size={18} />
          </ButtonTrash>
        </ContentHeader>

        <ContentFooter>
          <p className="quantity-cart-label">Quantidade:</p>
          <div className="container-control-quantity-cart">
            <ButtonQuantity type="button">-</ButtonQuantity>
            <input value={quantity_cart} disabled />
            <ButtonQuantity type="button">+</ButtonQuantity>
          </div>
        </ContentFooter>
      </Content>
    </Container>
  );
};

export default CardProduct;
