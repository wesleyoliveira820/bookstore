import { FC } from "react";
import EmptyCart from "@assets/empty-cart.svg";

import Link from "next/link";
import { Container } from "./styles";

const EmptyStateElement: FC = () => (
  <Container>
    <EmptyCart />
    <h4 id="description-content">Seu carrinho está vazio.</h4>
    <Link href="/products">
      <a id="link-to-home">
        <p>Voltar para a página inicial</p>
      </a>
    </Link>
  </Container>
);

export default EmptyStateElement;
