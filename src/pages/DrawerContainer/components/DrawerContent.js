import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from "./DrawerContent.styles";

export const DrawerContent = ({ descriptors }) => {
  const drawerItems = Object.keys(descriptors).map((key, idx) => {
    const item = descriptors[key];

    return (
      <View key={idx}>
        <Text>{item.route.name}</Text>
      </View>
    );
  });

  return <View style={styles.container}>{drawerItems}</View>;
};
