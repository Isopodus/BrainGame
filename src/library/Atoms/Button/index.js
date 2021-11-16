import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useStylesWithTheme } from "../../../hooks/useStylesWithTheme";

export const Button = ({ title }) => {
  const stylesWithTheme = useStylesWithTheme(styles);
  return (
    <TouchableOpacity style={stylesWithTheme.button}>
      <Text style={stylesWithTheme.title}>{title}</Text>
    </TouchableOpacity>
  );
};
