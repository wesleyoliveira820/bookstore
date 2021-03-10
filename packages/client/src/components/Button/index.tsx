import { FC } from "react";
import { Container } from "./styles";

interface IButtonProps {
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ children, onClick }) => (
  <Container onClick={onClick}>{children}</Container>
);

export default Button;
