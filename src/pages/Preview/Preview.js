import React from "react";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { PreviewHeader } from "./components/PreviewHeader/PreviewHeader";
import { PreviewImage } from "./components/PreviewImage/PreviewImage";

export const Preview = () => (
  <PageLayout>
    <PreviewHeader />
    <PreviewImage />
  </PageLayout>
);
