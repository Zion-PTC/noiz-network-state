import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../HTML/React/style/Global";
import {
  darkTheme,
  lightTheme,
} from "../HTML/React/themes";

export default function _app({ Component }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Component />
    </ThemeProvider>
  );
}
