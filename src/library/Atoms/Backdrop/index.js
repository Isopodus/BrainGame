import React from "react";
import { View } from "react-native";
import { useStylesWithTheme } from "../../../hooks/useStylesWithTheme";
import { styles } from "./styles";
import { Animation } from "../Animations";

export const Backdrop = () => {
  const [stylesWithTheme] = useStylesWithTheme(styles);
  return (
    <View style={stylesWithTheme.backdrop}>
      <Animation name={"spinner"} style={stylesWithTheme.spinner} />
    </View>
  );
};
