import { FC } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addProductToCartRequest } from "@store/modules/cart/actions";

import Button from "@components/Button";
import { IProductProps } from "@interfaces/products";

import { Container, CardImage, Price, Title, Footer } from "./styles";

const CardProduct: FC<IProductProps> = ({
  id,
  cover_url,
  title,
  unit_price,
}) => {
  const dispatch = useDispatch();

  function handleAddProductToCart(product_id: string) {
    dispatch(addProductToCartRequest(product_id));
  }

  return (
    <Container>
      <CardImage>
        <div className="wrapper-image">
          <Image
            src={cover_url}
            alt={title}
            width={170}
            height={240}
            layout="intrinsic"
          />
        </div>
      </CardImage>
      <Price>
        <h4>{unit_price}</h4>
      </Price>
      <Title>
        <p className="product-title">{title}</p>
      </Title>
      <Footer>
        <Button onClick={() => handleAddProductToCart(id)}>
          Adicionar ao carrinho
        </Button>
      </Footer>
    </Container>
  );
};

export default CardProduct;
