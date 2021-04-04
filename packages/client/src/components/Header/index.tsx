import { FC } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import Logo from "@assets/logo.svg";
import Cart from "@assets/cart-outline.svg";

import { IReduxState } from "@interfaces/redux";
import { Container, Content, CartLink } from "./styles";

const Header: FC = () => {
  const { cart } = useSelector((state: IReduxState) => state);

  return (
    <Container>
      <Content>
        <Link href="/products">
          <a>
            <Logo />
          </a>
        </Link>
        <Link href="/cart">
          <CartLink>
            <span>
              <strong>Meu carrinho</strong>
              <p>
                {cart.length > 9 ? "+9" : cart.length}{" "}
                {cart.length > 1 ? "items" : "item"}
              </p>
            </span>
            <Cart />
          </CartLink>
        </Link>
      </Content>
    </Container>
  );
};

export default Header;
