import styled from "styled-components";

export const Container = styled.header`
  width: 100%auto;
  background-color: ${(props) => props.theme.colors.brand.primary};
  height: 72px;
  padding: 16px;
`;

export const Content = styled.div`
  max-width: 1126px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;
