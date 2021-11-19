import React, { useEffect } from "react";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { PreviewHeader } from "./components/PreviewHeader/PreviewHeader";
import { PreviewImage } from "./components/PreviewImage/PreviewImage";
import Orientation from "react-native-orientation";

export const Preview = ({ navigation }) => {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <PageLayout>
      <PreviewHeader navigation={navigation} />
      <PreviewImage />
    </PageLayout>
  );
};
