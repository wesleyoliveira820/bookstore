import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-size: 16px;
    line-height: 24px;
    font-family: Roboto, sans-serif;
    overflow-y: scroll;
    background-color: ${(props) => props.theme.colors.bg.primary};
    color: ${(props) => props.theme.colors.text.primary};
  }
`;
