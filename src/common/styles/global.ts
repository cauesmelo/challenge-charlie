import { Fonts } from "./fonts";
import { Reset } from "./reset";
import { Defaults } from "./defaults";
import { Variables } from "./variables";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${Reset};
  ${Fonts};
  ${Defaults};
  ${Variables};
`;
