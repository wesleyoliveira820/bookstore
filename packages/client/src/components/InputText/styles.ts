import styled from "styled-components";

interface IInputProps {
  error?: string;
}

export const Container = styled.div<IInputProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  .input-text-form {
    width: 100%;
    padding: 8px 0;
    font-size: 16px;
    border: 0;
    background-color: ${(props) => props.theme.colors.bg.primary};

    border-bottom: 1px solid
      ${(props) =>
        props.error
          ? props.theme.colors.helpers.error
          : props.theme.colors.divider.primary};

    &:focus {
      border-bottom-color: ${(props) => props.theme.colors.brand.primary};
    }
  }

  .error-validation-message {
    color: ${(props) => props.theme.colors.helpers.error};
    font-size: 14px;
  }
`;
