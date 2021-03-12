import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  max-width: 1126px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin: 0 auto 16px;
`;

export const CardContainer = styled.ul`
  max-width: 648px;
  width: 100%;
  margin-top: 24px;

  > h4 {
    font-size: 21px;
    font-weight: 500;
    margin-bottom: 16px;
  }
`;
