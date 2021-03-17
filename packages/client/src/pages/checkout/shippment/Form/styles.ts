import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Container = styled.div`
  max-width: 552px;
  width: 100%;

  #title-shippment {
    font-size: 21px;
    font-weight: 500;
  }
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;

  input {
    margin-top: 24px;
  }

  input#zip_code {
    width: 48%;
  }

  .align-input-row {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    div {
      width: 48%;
    }
  }

  #button-container {
    width: 168px;
    margin-right: auto;
    margin-left: calc(100% - 168px);
    margin-top: 32px;
  }
`;
