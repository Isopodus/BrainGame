import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export const PageLayout = ({ children }) => {
  return <View style={styles.layout}>{children}</View>;
};
