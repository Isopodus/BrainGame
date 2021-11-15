import React from "react";
import { ImageBackground, Text } from "react-native";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { PreviewHeader } from "./components/PreviewHeader/PreviewHeader";

export const Preview = () => {
  return (
    <PageLayout>
      <PreviewHeader />
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
        }}
        source={require("../../assets/images/players.jpg")}
        resizeMode={"contain"}
      />
    </PageLayout>
  );
};
