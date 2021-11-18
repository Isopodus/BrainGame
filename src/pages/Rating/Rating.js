import React from "react";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { useStylesWithTheme } from "../../hooks/useStylesWithTheme";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./Rating.styles";
import { Header } from "../../library/Molecules/Header";
import { Animation } from "../../library/Atoms/Animations";
import { RatingPlayerScore } from "./components/RatingPlayerScore/RatingPlayerScore";
import { PrimaryButton } from "../../library/Atoms/Button/PrimaryButton";

export const Rating = () => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

  return (
    <PageLayout profileMode>
      <Header rounded>
        <Animation name={"piggy-bank"} style={stylesWithTheme.animation} />
      </Header>
      <ScrollView style={stylesWithTheme.page}>
        <RatingPlayerScore />
      </ScrollView>
      <PrimaryButton title={"Back to the games"} style={stylesWithTheme.button} secondaryColor />
    </PageLayout>
  );
};
