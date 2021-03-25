import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  max-width: 1126px;
  width: 100%;
  margin: 24px auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const OptionContainer = styled.div`
  max-width: 552px;
  width: 100%;

  #title-payment {
    font-size: 21px;
    font-weight: 500;
  }

  #subtitle-payment {
    font-weight: 500;
    margin-top: 32px;
  }
`;

export const OptionCreditCard = styled.div`
  margin-top: 16px;

  .header-option-card {
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.divider.primary};
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.bg.primary};
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 24px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.text.primary};

    input {
      cursor: pointer;
    }

    svg {
      margin: 0 16px;
      color: ${(props) => props.theme.colors.text.primary};
    }
  }
`;
