import React from "react";
import { Text, View } from "react-native";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { styles } from "./ProfileBanner.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";

export const ProfileBanner = () => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

  return (
    <>
      <VerticalLayout style={stylesWithTheme.container}>
        <Text style={stylesWithTheme.subtitle}>Player №</Text>
        <Text style={stylesWithTheme.title}>456</Text>
      </VerticalLayout>
      <View style={stylesWithTheme.margin} />
    </>
  );
};
