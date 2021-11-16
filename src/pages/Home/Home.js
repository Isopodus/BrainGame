import React from "react";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { HomeGameCard } from "./components/HomeGameCard/HomeGameCard";

export const Home = () => {
  return (
    <PageLayout>
      <HomeGameCard title={`First${"\n"}game`} />
      <HomeGameCard title={`Second${"\n"}game`} reverse />
      <HomeGameCard title={`Third${"\n"}game`} />
    </PageLayout>
  );
};
