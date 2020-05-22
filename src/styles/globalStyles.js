import { createGlobalStyle } from "styled-components";

import DIN from "../fonts/D-DIN.otf";
import DINBold from "../fonts/D-DIN-Bold.otf";
import DINCondensed from "../fonts/D-DINCondensed.otf";
import DINCondensedBold from "../fonts/D-DINCondensed-Bold.otf";

export default createGlobalStyle`
  @font-face {
    font-family: DIN;
    src: 
      local('DIN'),
      url(${DIN}) format("opentype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: DIN;
    src:
      local('DIN'),
      url(${DINBold}) format("opentype");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: DINCondensed;
    src: 
      local('DINCondensed'),
      url(${DINCondensed}) format("opentype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: DINCondensed;
    src:
      local('DINCondensed'), 
      url(${DINCondensedBold}) format("opentype");
    font-weight: 600;
    font-style: normal;
  }

  html {
    font-family: ${(props) => props.theme.font.baseFontFamily};
    font-size: ${(props) => props.theme.font.baseFontSize};
    font-weight: ${(props) => props.theme.font.baseFontWeight};

    body {
      padding: 1.5rem;
      margin: 0;
    }
  }
`;
