import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Rhodium Libre';
    src: url('/fonts/RhodiumLibre-Regular.ttf');
  }

  * {
    font-family: "Rhodium Libre";
    box-sizing: border-box;
  }

  body, h1, h2 {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
