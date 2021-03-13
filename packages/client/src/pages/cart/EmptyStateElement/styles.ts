import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: calc(100vh - 72px);

  #description-content {
    font-size: 21px;
    font-weight: 500;
    margin-top: 32px;
  }

  #link-to-home {
    text-decoration: none;
    margin-top: 32px;
    height: 48px;
    max-width: 360px;
    width: 100%;

    border: 2px solid ${(props) => props.theme.colors.brand.primary};
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text.primary};
  }
`;
