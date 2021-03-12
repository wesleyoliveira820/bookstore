import { NextPage } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";

import Header from "@components/Header";
import { IProductProps } from "@interfaces/products";
import CardProduct from "./CardProduct";

import { Container, Content, CardContainer } from "./styles";

interface ICartProductProps extends IProductProps {
  quantity_cart: number;
}

interface IStateProps {
  cart: ICartProductProps[];
}

const Cart: NextPage = () => {
  const { cart } = useSelector((state: IStateProps) => state);

  return (
    <Container>
      <Head>
        <title>Bookstore - Carrinho de compras</title>
      </Head>
      <Header />
      <Content>
        <CardContainer>
          <h4>Meu carrinho</h4>
          {cart?.map((product) => (
            <CardProduct key={product.id} {...product} />
          ))}
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Cart;
