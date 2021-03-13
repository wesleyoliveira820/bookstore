import { FC } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";
import Button from "@components/Button";

import { formatPrice } from "@utils/fotmat";
import { IProductProps } from "@interfaces/products";

import Condition from "@components/Condition";
import { Container, Content, RowPropertie } from "./styles";

interface ICartProductProps extends IProductProps {
  quantity_cart: number;
}

interface IState {
  cart: ICartProductProps[];
}

const ResumePurchase: FC = () => {
  function calculatesTotalCart(
    totalSum: number,
    unitPrice: string,
    quantity: number
  ) {
    const converUnitPrice = parseFloat(unitPrice);

    const sumTotal = totalSum + converUnitPrice * quantity;

    return sumTotal;
  }

  const total = useSelector((state: IState) =>
    formatPrice(
      state.cart.reduce(
        (totalSum, { unit_price, quantity_cart }) =>
          calculatesTotalCart(totalSum, unit_price, quantity_cart),
        0
      )
    )
  );

  return (
    <Container>
      <h4 id="title-resume-purchase">Resumo da compra</h4>
      <Content>
        <ul id="list-prices-and-discounts">
          <RowPropertie>
            <p>Subtotal:</p>
            <strong className="propertie-value">{total}</strong>
          </RowPropertie>
          <RowPropertie>
            <p>Descontos:</p>
            <strong className="propertie-value">R$ 0</strong>
          </RowPropertie>
          <RowPropertie>
            <p>Frete:</p>
            <strong className="propertie-value">Grátis</strong>
          </RowPropertie>
          <RowPropertie noLine>
            <p>Você pagará:</p>
            <strong className="propertie-value" id="propertie-total-purchase">
              {total}
            </strong>
          </RowPropertie>
        </ul>
        <Condition condition={Router.pathname !== "/cart"}>
          <Button size="large">Finalizar pedido</Button>
        </Condition>
      </Content>
    </Container>
  );
};

export default ResumePurchase;
