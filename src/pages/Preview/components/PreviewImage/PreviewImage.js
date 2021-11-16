import React from "react";
import { ImageBackground } from "react-native";
import { styles } from "./PreviewImage.styles";

export const PreviewImage = () => (
  <ImageBackground style={styles.image} source={require("../../../../assets/images/players.jpg")} resizeMode={"contain"} />
);
