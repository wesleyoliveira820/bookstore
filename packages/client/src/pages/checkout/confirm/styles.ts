import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1126px;
  width: 100%;
  margin: 24px auto;

  #container-table-button {
    max-width: 552px;
    width: 100%;
  }

  #button-container {
    width: 264px;
    margin-right: auto;
    margin-left: calc(100% - 264px);
    margin-top: 16px;
  }
`;
