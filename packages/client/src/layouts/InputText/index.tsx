import { FC } from "react";

import { Container } from "./styles";

interface IInputProps {
  error?: string;
}

const InputTextLayout: FC<IInputProps> = ({ error, children }) => (
  <Container error={error}>
    {children}
    {error && <span className="error-validation-message">{error}</span>}
  </Container>
);

export default InputTextLayout;
