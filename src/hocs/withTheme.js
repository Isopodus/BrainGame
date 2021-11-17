import { DefaultTheme, Provider as PaperProvider, configureFonts } from "react-native-paper";
import React from "react";
import { colors } from "../ui/colors";
import { fonts } from "../ui/fonts";
import { scale, fullWidth, fullHeight } from "../ui/size";

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, ...colors },
  fonts: configureFonts({ ...DefaultTheme.fonts, ...fonts }),
  sizes: { scale, fullHeight, fullWidth },
};

export const withTheme = (Component, props) => (
  <PaperProvider theme={theme}>
    <Component {...props} />
  </PaperProvider>
);
