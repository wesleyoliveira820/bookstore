import { FC } from "react";
import Link from "next/link";
import Logo from "@assets/logo.svg";
import { Container, Content } from "./styles";

const Header: FC = () => (
  <Container>
    <Content>
      <Link href="/products">
        <a>
          <Logo />
        </a>
      </Link>
    </Content>
  </Container>
);

export default Header;
