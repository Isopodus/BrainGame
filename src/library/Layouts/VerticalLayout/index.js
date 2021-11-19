import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export const VerticalLayout = ({ style, children, onTouchStart, onTouchEnd }) => {
  return (
    <View style={{ ...styles.layout, ...style }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {children}
    </View>
  );
};
