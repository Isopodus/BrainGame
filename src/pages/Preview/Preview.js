import React from "react";
import { ImageBackground, Text } from "react-native";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { PreviewHeader } from "./components/PreviewHeader/PreviewHeader";
import { PreviewImage } from "./components/PreviewImage/PreviewImage";

export const Preview = () => {
  return (
    <PageLayout>
      <PreviewHeader />
      <PreviewImage />
    </PageLayout>
  );
};
