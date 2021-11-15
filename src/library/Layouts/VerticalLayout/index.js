import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export const VerticalLayout = ({ style, children }) => {
  return <View style={{ ...styles.layout, ...style }}>{children}</View>;
};
