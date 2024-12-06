import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Public Sans', sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
