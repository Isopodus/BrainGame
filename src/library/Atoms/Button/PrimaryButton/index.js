import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";

export const PrimaryButton = ({ title, style, textStyle, disabled = false, secondaryColor = false, onPress }) => {
  const [stylesWithTheme, theme] = useStylesWithTheme(styles);
  return (
    <TouchableOpacity
      style={[
        stylesWithTheme.button,
        style,
        disabled && { backgroundColor: theme.colors.dark },
        secondaryColor && { backgroundColor: theme.colors.blue },
      ]}
      onPress={onPress}
    >
      <Text style={[stylesWithTheme.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
