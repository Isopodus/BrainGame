import React from "react";
import { View } from "react-native";
import Svg, { Rect } from "react-native-svg";
import { styles } from "./HomeShapes.styles";

export const HomeShapeSquare = () => {
  const width = styles.container.width;
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" viewBox={`0 0 ${width + 5} ${width + 10}`}>
        <Rect height={width} width={width} x={0} y={5} stroke="white" strokeWidth="10" />
      </Svg>
    </View>
  );
};
