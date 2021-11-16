import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Polygon } from "react-native-svg";

import { scale } from "../../../ui/size";

export const Triangle = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", width: scale(100) }}>
      <Svg height="100%" width="100%" viewBox="0 0 100 100">
        <Polygon height={100} width={100} points="0,100 100,100 50,0" stroke="red" strokeWidth="2" fill="yellow" />
      </Svg>
    </View>
  );
};
