import React from "react";
import { Text, View } from "react-native";
import { useStylesWithTheme } from "../../../hooks/useStylesWithTheme";
import { styles } from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { RowLayout } from "../../Layouts/RowLayout";
import { Icon } from "../../Atoms/Icons";
import { VerticalLayout } from "../../Layouts/VerticalLayout";

export const Header = ({ title, titleStyle, subtitle, rounded = false, children, navigation }) => {
  const [stylesWithTheme, theme] = useStylesWithTheme(styles);
  if (rounded) {
    return (
      <>
        <VerticalLayout style={stylesWithTheme.containerRounded}>
          {title && <Text style={stylesWithTheme.subtitleRounded}>{title}</Text>}
          {subtitle && <Text style={stylesWithTheme.titleRounded}>{subtitle}</Text>}
          {children}
        </VerticalLayout>
        <View style={stylesWithTheme.margin} />
      </>
    );
  }
  return (
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
          <View style={stylesWithTheme.circle}>
            <Icon
              name={"equal"}
              size={theme.sizes.scale(50)}
              color={theme.colors.dark}
              onPress={navigation.openDrawer}
            />
          </View>
          <RowLayout>
            <Text style={[stylesWithTheme.title, titleStyle]}>{title}</Text>
          </RowLayout>
        </LinearGradient>
      </LinearGradient>
    </LinearGradient>
  );
};
