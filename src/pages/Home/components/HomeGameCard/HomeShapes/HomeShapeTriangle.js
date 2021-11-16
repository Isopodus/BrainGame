import React from "react";
import { View } from "react-native";
import Svg, { Polygon } from "react-native-svg";
import { styles } from "./HomeShapes.styles";

export const HomeShapeTriangle = () => {
  const width = styles.container.width;
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" viewBox={`0 0 ${width + 3} ${width + 5}`}>
        <Polygon
          height={width}
          width={width}
          points={`3,${width} ${width},${width} ${width / 2},10`}
          stroke="white"
          strokeWidth="10"
        />
      </Svg>
    </View>
  );
};
