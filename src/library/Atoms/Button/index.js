import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useStylesWithTheme } from "../../../hooks/useStylesWithTheme";

export const Button = ({ title, style, disabled = false }) => {
  const [stylesWithTheme, theme] = useStylesWithTheme(styles);
  return (
    <TouchableOpacity style={[stylesWithTheme.button, style, disabled && { backgroundColor: theme.colors.dark }]}>
      <Text style={stylesWithTheme.title}>{title}</Text>
    </TouchableOpacity>
  );
};
