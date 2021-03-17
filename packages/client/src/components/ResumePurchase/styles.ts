import styled from "styled-components";

interface IRowProps {
  noLine?: boolean;
}

export const Container = styled.div`
  max-width: 456px;
  width: 100%;

  #title-resume-purchase {
    font-size: 21px;
    font-weight: 500;
    margin-bottom: 16px;
  }
`;

export const Content = styled.div`
  border: 1px solid ${(props) => props.theme.colors.divider.primary};
  border-radius: 5px;
  padding: 0 24px;

  > button {
    margin-bottom: 24px;
  }
`;

export const RowPropertie = styled.li<IRowProps>`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px 0;

  border-bottom: ${(props) =>
    props.noLine
      ? `
        0
      `
      : `
        1px solid ${props.theme.colors.divider.primary};
      `};

  .propertie-value {
    font-weight: bold;
  }
`;
