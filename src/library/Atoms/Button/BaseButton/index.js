import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";

export const BaseButton = ({ title, style }) => {
  const [stylesWithTheme] = useStylesWithTheme(styles);
  return (
    <TouchableOpacity style={[stylesWithTheme.button, style]}>
      <Text style={stylesWithTheme.title}>{title}</Text>
    </TouchableOpacity>
  );
};
