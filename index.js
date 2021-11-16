import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import {
  DefaultTheme,
  Provider as PaperProvider,
  configureFonts,
} from "react-native-paper";
import { colors } from "./src/ui/colors";
import { fonts } from "./src/ui/fonts";
import React from "react";

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, ...colors },
  fonts: configureFonts({ ...DefaultTheme.fonts, ...fonts }),
};

const Root = () => (
  <PaperProvider theme={theme}>
    <App />
  </PaperProvider>
);

AppRegistry.registerComponent(appName, () => Root);
