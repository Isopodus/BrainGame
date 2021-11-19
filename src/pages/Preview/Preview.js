import React, { useEffect } from "react";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { PreviewHeader } from "./components/PreviewHeader/PreviewHeader";
import { PreviewImage } from "./components/PreviewImage/PreviewImage";
import Orientation from "react-native-orientation";

export const Preview = () => {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <PageLayout>
      <PreviewHeader />
      <PreviewImage />
    </PageLayout>
  );
};
