import React from "react";
import { useStylesWithTheme } from "../../../hooks/useStylesWithTheme";
import { styles } from "./styles";
import { useOpenClose } from "../../../hooks/useOpenClose";
import { List } from "react-native-paper";
import { View } from "react-native";

export const Accordion = ({ title, children }) => {
  const [stylesWithTheme, theme] = useStylesWithTheme(styles);

  const [isOpen, open, close] = useOpenClose(false);

  return (
    <List.Accordion
      title={title}
      titleStyle={stylesWithTheme.title}
      expanded={isOpen}
      onPress={isOpen ? close : open}
      style={{ backgroundColor: theme.colors.blue }}
    >
      <View style={stylesWithTheme.content}>{children}</View>
    </List.Accordion>
  );
};
