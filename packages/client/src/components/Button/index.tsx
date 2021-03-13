import { FC } from "react";
import { Container, Loader } from "./styles";

type SizeButton = "medium" | "large";

interface IButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
  size?: SizeButton;
}

const Button: FC<IButtonProps> = ({
  children,
  onClick,
  isLoading = false,
  size = "medium",
}) => (
  <Container onClick={onClick} disabled={isLoading} size={size}>
    {isLoading ? <Loader /> : children}
  </Container>
);

export default Button;
