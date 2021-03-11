import { FC } from "react";
import { Container, Loader } from "./styles";

interface IButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: FC<IButtonProps> = ({
  children,
  onClick,
  isLoading = false,
  disabled = false,
}) => (
  <Container onClick={onClick} disabled={disabled}>
    {isLoading ? <Loader /> : children}
  </Container>
);

export default Button;
