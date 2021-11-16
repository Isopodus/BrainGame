import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export const RowLayout = ({ style, children }) => {
  return <View style={[styles.layout, style]}>{children}</View>;
};
