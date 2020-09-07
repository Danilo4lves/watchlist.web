// Dependencies
import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize};

  html {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
       -moz-box-sizing: inherit;
            box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  ol,
  ul,
  li {
    list-style: none;
  }
`;
