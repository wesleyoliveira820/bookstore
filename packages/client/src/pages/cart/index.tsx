import { NextPage } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";

import Header from "@components/Header";
import { IProductProps } from "@interfaces/products";
import Condition from "@components/Condition";
import ResumePurchase from "@components/ResumePurchase";
import CardProduct from "./CardProduct";
import EmptyStateElement from "./EmptyStateElement";

import { Container, Content, CardContainer } from "./styles";

interface ICartProductProps extends IProductProps {
  quantity_cart: number;
  price_formatted: string;
}

interface IStateProps {
  cart: ICartProductProps[];
}

const Cart: NextPage = () => {
  const { cart } = useSelector((state: IStateProps) => state);

  return (
    <Container>
      <Head>
        <title>Carrinho de compras</title>
      </Head>
      <Header />
      <Condition
        condition={cart.length === 0}
        enterCondition={<EmptyStateElement />}
      >
        <Content>
          <CardContainer>
            <h4>Meu carrinho</h4>
            {cart.map((product) => (
              <CardProduct key={product.id} {...product} />
            ))}
          </CardContainer>
          <ResumePurchase />
        </Content>
      </Condition>
    </Container>
  );
};

export default Cart;
