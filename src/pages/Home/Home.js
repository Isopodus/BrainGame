import React from "react";
import { ScrollView } from "react-native";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { HomeGameCard } from "./components/HomeGameCard/HomeGameCard";
import { HomeHeader } from "./components/HomeHeader/HomeHeader";
import { useStylesWithTheme } from "../../hooks/useStylesWithTheme";
import { styles } from "./Home.styles";

export const Home = () => {
  const [stylesWithTheme] = useStylesWithTheme(styles);
  return (
    <PageLayout>
      <HomeHeader />

      <ScrollView>
        <HomeGameCard title={`First${"\n"}game`} figure={"circle"} style={stylesWithTheme.firstCard} />
        <HomeGameCard title={`Second${"\n"}game`} figure={"triangle"} reverse disabled />
        <HomeGameCard title={`Third${"\n"}game`} disabled />
      </ScrollView>
    </PageLayout>
  );
};
