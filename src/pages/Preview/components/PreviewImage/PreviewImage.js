import React from "react";
import { ImageBackground } from "react-native";
import { styles } from "./PreviewImage.styles";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";

export const PreviewImage = () => {
  const [stylesWithTheme] = useStylesWithTheme(styles);
  return (
    <ImageBackground
      style={stylesWithTheme.image}
      source={require("../../../../assets/images/players.jpg")}
      resizeMode={"contain"}
    />
  );
};
