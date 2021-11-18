import React from "react";
import { Text } from "react-native";
import { VerticalLayout } from "../../Layouts/VerticalLayout";
import { styles } from "./styles";
import { RadioButton } from "react-native-paper";
import { useStylesWithTheme } from "../../../hooks/useStylesWithTheme";
import { RowLayout } from "../../Layouts/RowLayout";

export const RadioButtonsGroup = ({ title, value, options, onChange }) => {
  const [stylesWithTheme, theme] = useStylesWithTheme(styles);

  return (
    <VerticalLayout style={stylesWithTheme.container}>
      <RadioButton.Group value={value} onValueChange={onChange}>
        {options.map(({ label, name }) => (
          <RowLayout key={`${label}-${name}`} style={stylesWithTheme.button}>
            <RadioButton value={name} color={theme.colors.white} uncheckedColor={theme.colors.dark} />
            <Text
              style={[stylesWithTheme.label, value === name && { color: theme.colors.white }]}
              onPress={() => onChange(name)}
            >
              {label}
            </Text>
          </RowLayout>
        ))}
      </RadioButton.Group>
    </VerticalLayout>
  );
};
