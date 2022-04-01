import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  darkBG: "#090D28",
  darkOne: "#181B3A",
  darkTwo: "#252A4A",
  lightBG: "#F7F8FC",
  lightOne: "#FFFFFF",
  lightTwo: "#DBDBDB",
  main: "#6566E5",
  primary: "#31485A", // dark icon color
  secondary: "#BCCBD4", // light icon color
  tertiary: "#DFE6EC", // ash color
  theme: {
    100: "#6566E5",
    200: "#6566E5",
    300: "#6566E5",
    400: "#6566E5",
    500: "#6566E5",
    600: "#6566E5",
    700: "#6566E5",
    800: "#6566E5",
    900: "#6566E5",
  },
};

const fonts = {
  body: "Poppins, sans-serif",
};

const theme = extendTheme({ colors, fonts, config });

export default theme;
