import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";

export const PrimaryButton = ({ title, style, disabled = false, secondaryColor = false }) => {
  const [stylesWithTheme, theme] = useStylesWithTheme(styles);
  return (
    <TouchableOpacity
      style={[
        stylesWithTheme.button,
        style,
        disabled && { backgroundColor: theme.colors.dark },
        secondaryColor && { backgroundColor: theme.colors.blue },
      ]}
    >
      <Text style={stylesWithTheme.title}>{title}</Text>
    </TouchableOpacity>
  );
};
