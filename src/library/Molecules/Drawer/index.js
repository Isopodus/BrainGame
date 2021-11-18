import React from "react";
import { View } from "react-native";
import { BaseButton } from "../../Atoms/Button/BaseButton";
import { VerticalLayout } from "../../Layouts/VerticalLayout";
import { styles } from "./styles";

export const DrawerContent = ({ navigation, descriptors, state }) => {
  const drawerItems = Object.keys(descriptors).map((key, idx) => {
    const item = descriptors[key];
    const active = state.routes[state.index].name === item.route.name;
    return (
      <BaseButton
        titleStyle={[active && styles.active, styles.link]}
        key={idx}
        title={item.route.name}
        onPress={() => navigation.navigate(item.route.name)}
      />
    );
  });

  return (
    <VerticalLayout style={styles.container}>
      <View style={styles.topCircle} />
      {drawerItems}
      <View style={styles.bottomCircle} />
    </VerticalLayout>
  );
};
