import React from "react";
import { ThemeProvider } from "styled-components";

const Base = {
  pureWhite: "#ffffff",
  softWhite: "#f4f5f6",
  blueDark: "#F8B195",
  blueMid: "#016699",
  blueLight: "#5bb7d4",
  red: "ff2105"
};

const theme = {
  bg: Base.softWhite,
  player: {
    background: Base.blueLight,
    border: Base.blueLight,
    projectile: Base.red
  },
  ai: {
    background: Base.blueDark,
    border: Base.blueDark,
    projectile: Base.red,
    arrow: Base.pureWhite
  },
  wall: {
    background: Base.blueMid
  },
  finish: {
    background: Base.softWhite
  }
};

const Theme = prop => (
  <ThemeProvider theme={theme}>
    <div>{prop.children}</div>
  </ThemeProvider>
);

export default Theme;
