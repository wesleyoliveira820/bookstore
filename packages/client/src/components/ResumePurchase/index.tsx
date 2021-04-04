import { FC } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";
import Button from "@components/Button";

import { formatPrice } from "@utils/fotmat";

import Condition from "@components/Condition";
import { IReduxState } from "@interfaces/redux";
import { Container, Content, RowPropertie } from "./styles";

interface IProps {
  showButton?: boolean;
}

const ResumePurchase: FC<IProps> = ({ showButton = false }) => {
  function calculatesTotalCart(
    totalSum: number,
    unitPrice: string,
    quantity: number
  ) {
    const converUnitPrice = parseFloat(unitPrice);

    const sumTotal = totalSum + converUnitPrice * quantity;

    return sumTotal;
  }

  const total = useSelector((state: IReduxState) =>
    formatPrice(
      state.cart.reduce(
        (totalSum, { unit_price, quantity_cart }) =>
          calculatesTotalCart(totalSum, unit_price, quantity_cart),
        0
      )
    )
  );

  function handleGoCheckoutPage() {
    Router.push("/checkout/shippment");
  }

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
        <Condition condition={!showButton}>
          <Button size="large" onClick={handleGoCheckoutPage}>
            Finalizar pedido
          </Button>
        </Condition>
      </Content>
    </Container>
  );
};

export default ResumePurchase;
