import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Container = styled.div`
  #title-form {
    margin: 24px 0;
    font-weight: 500;
  }

  .rccs {
    margin: 0 -15px;

    .rccs__card {
      width: 264px;
      height: 152px;
    }

    .rccs__card--front {
      border-radius: 10px;

      .rccs__number {
        font-size: 18px;
      }

      .rccs__name {
        font-size: 14px;
      }

      .rccs__expiry__value {
        font-size: 14px;
      }
    }
  }
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;

  input {
    margin-top: 24px;
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
