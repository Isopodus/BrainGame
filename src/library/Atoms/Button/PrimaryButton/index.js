import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { Progress } from "../../Progress";

export const PrimaryButton = ({ title, style, disabled = false, secondaryColor = false, loading = false, onPress }) => {
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
      {loading ? (
        <Progress size={"small"} color={theme.colors.white} />
      ) : (
        <Text style={stylesWithTheme.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
