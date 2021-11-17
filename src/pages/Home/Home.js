import React from "react";
import { ScrollView } from "react-native";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { HomeGameCard } from "./components/HomeGameCard/HomeGameCard";

export const Home = () => {
  return (
    <PageLayout>
      <ScrollView>
        <HomeGameCard title={`First${"\n"}game`} figure={"circle"} />
        <HomeGameCard title={`Second${"\n"}game`} figure={"triangle"} reverse disabled />
        <HomeGameCard title={`Third${"\n"}game`} disabled />
      </ScrollView>
    </PageLayout>
  );
};
