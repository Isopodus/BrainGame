import React from "react";
import { Text, View } from "react-native";
import { useStylesWithTheme } from "../../../hooks/useStylesWithTheme";
import { styles } from "./styles";
import { Animation } from "../Animations";

export const Backdrop = ({ text }) => {
  const [stylesWithTheme] = useStylesWithTheme(styles);
  return (
    <View style={stylesWithTheme.backdrop}>
      {text ? (
        <Text style={stylesWithTheme.text}>{text}</Text>
      ) : (
        <Animation name={"spinner"} style={stylesWithTheme.spinner} />
      )}
    </View>
  );
};
