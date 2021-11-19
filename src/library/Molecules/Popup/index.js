import React from "react";
import { Text } from "react-native";
import Modal from "react-native-modal";
import { useStylesWithTheme } from "../../../hooks/useStylesWithTheme";
import { styles } from "./styles";

export const Popup = ({ open, title, children, bottomButtons }) => {
  const [stylesWithTheme, theme] = useStylesWithTheme(styles);
  return (
    <Modal isVisible={open} backdropColor={theme.colors.blue} backdropOpacity={0.95} style={stylesWithTheme.modal}>
      <Text style={stylesWithTheme.title}>{title}</Text>
      {children}
      {bottomButtons}
    </Modal>
  );
};
