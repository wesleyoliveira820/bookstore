import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 9999;
  position: fixed;
`;

export const Modal = styled.div`
  padding: 56px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;

  svg {
    color: ${(props) => props.theme.colors.brand.primary};
  }

  #description-modal {
    margin-top: 24px;
    font-size: 21px;
    font-weight: 500;
  }
`;

export const ConfirmButton = styled.button`
  margin-top: 48px;
  font-size: 18px;
  font-weight: bold;
  background: none;
  border: 0;
  color: ${(props) => props.theme.colors.brand.primary};
  cursor: pointer;
`;
