import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { useStylesWithTheme } from "../../../hooks/useStylesWithTheme";

export const PageLayout = ({ children, profileMode = false }) => {
  const [stylesWithTheme, theme] = useStylesWithTheme(styles);
  return (
    <View style={[stylesWithTheme.layout, profileMode && { backgroundColor: theme.colors.pink }]}>{children}</View>
  );
};
