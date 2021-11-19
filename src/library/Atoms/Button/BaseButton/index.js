import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";

export const BaseButton = ({ title, style, titleStyle, onPress }) => {
  const [stylesWithTheme] = useStylesWithTheme(styles);
  return (
    <TouchableOpacity style={[stylesWithTheme.button, style]} onPress={onPress}>
      <Text style={[stylesWithTheme.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
