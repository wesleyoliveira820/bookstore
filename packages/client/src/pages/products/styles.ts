import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  max-width: 1126px;
  width: 100%;
  margin: 0 auto 32px;
`;

export const ProductsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 355px;
  grid-gap: 24px;
`;
