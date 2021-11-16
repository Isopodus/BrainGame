import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { styles } from "./HomeShapes.styles";

export const HomeShapeCircle = () => {
  const width = styles.container.width;
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" viewBox={`0 0 ${width + 5} ${width + 10}`}>
        <Circle r={width / 2} cx={width / 2} cy={width / 2 + 5} stroke="white" strokeWidth="10" />
      </Svg>
    </View>
  );
};
