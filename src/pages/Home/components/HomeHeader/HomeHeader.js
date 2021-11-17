import React from "react";
import { Text, View } from "react-native";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { styles } from "./HomeHeader.styles";
import LinearGradient from "react-native-linear-gradient";
import { RowLayout } from "../../../../library/Layouts/RowLayout";
import { Icon } from "../../../../library/Atoms/Icons";

export const HomeHeader = () => {
  const [stylesWithTheme, theme] = useStylesWithTheme(styles);
  return (
    <>
      <LinearGradient
        style={stylesWithTheme.container}
        colors={[theme.colors.rgba(theme.colors.blue, 1), theme.colors.rgba(theme.colors.blue, 0)]}
      >
        <LinearGradient
          style={stylesWithTheme.container}
          colors={[theme.colors.rgba(theme.colors.blue, 1), theme.colors.rgba(theme.colors.blue, 0)]}
        >
          <LinearGradient
            style={stylesWithTheme.container}
            colors={[theme.colors.rgba(theme.colors.blue, 1), theme.colors.rgba(theme.colors.blue, 0)]}
          >
            <View style={stylesWithTheme.topCircle}>
              <Icon name={"menu"} size={theme.sizes.scale(50)} color={theme.colors.dark} />
            </View>
            <RowLayout>
              <Text style={stylesWithTheme.title}>Brain Game</Text>
            </RowLayout>
          </LinearGradient>
        </LinearGradient>
      </LinearGradient>
      <View style={stylesWithTheme.bottomCircle}></View>
    </>
  );
};
