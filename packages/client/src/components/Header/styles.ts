import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.brand.primary};
  height: 72px;
  padding: 16px;
`;

export const Content = styled.div`
  max-width: 1126px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

export const CartLink = styled.a`
  display: flex;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;

  span {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${(props) => props.theme.colors.text.secondary};
    margin-right: 8px;

    strong {
      font-size: 16px;
      margin: 2px 0 -2px;
    }

    p {
      font-size: 14px;
    }
  }
`;
