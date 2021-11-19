import React from "react";
import { ScrollView, View } from "react-native";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { HomeGameCard } from "./components/HomeGameCard/HomeGameCard";
import { Header } from "../../library/Molecules/Header";
import { useStylesWithTheme } from "../../hooks/useStylesWithTheme";
import { styles } from "./Home.styles";

export const Home = ({ navigation }) => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

  return (
    <PageLayout>
      <Header title={"Brain game"} navigation={navigation} />

      <ScrollView>
        <HomeGameCard title={`First${"\n"}game`} style={stylesWithTheme.firstCard} completed />
        <HomeGameCard title={<>SEcond{"\n"}game</>} gameNumber={2} reverse />
        <HomeGameCard title={`Third${"\n"}game`} gameNumber={3} disabled />
      </ScrollView>

      <View style={stylesWithTheme.bottomCircle} />
    </PageLayout>
  );
};
