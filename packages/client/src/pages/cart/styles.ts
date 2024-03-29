import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  max-width: 1126px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 24px auto 16px;
`;

export const CardContainer = styled.ul`
  max-width: 648px;
  width: 100%;

  > h4 {
    font-size: 21px;
    font-weight: 500;
    margin-bottom: 16px;
  }
`;
