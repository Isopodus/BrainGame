import React from "react";
import { ImageBackground, Text } from "react-native";
import { styles } from "./PreviewHeader.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";

export const PreviewHeader = () => {
  return (
    <VerticalLayout style={styles.container}>
      <ImageBackground
        style={styles.logo}
        source={require("../../../../assets/images/logo.png")}
        resizeMode={"contain"}
      />
    </VerticalLayout>
  );
};
