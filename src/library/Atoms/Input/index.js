import { TextInput, Text, View } from "react-native";
import React, { useCallback } from "react";
import { styles } from "./styles";
import { useStylesWithTheme } from "../../../hooks/useStylesWithTheme";

export const Input = ({ name, value, label, placeholder, onChange, style, secureTextEntry }) => {
  const [stylesWithTheme, theme] = useStylesWithTheme(styles);

  const handleChange = useCallback(newValue => onChange(name, newValue), [name, onChange]);

  return (
    <View style={style}>
      <Text style={stylesWithTheme.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.rgba(theme.colors.white, 0.6)}
        value={value}
        secureTextEntry={secureTextEntry}
        style={stylesWithTheme.input}
        onChangeText={handleChange}
      />
    </View>
  );
};
