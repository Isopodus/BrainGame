import React from "react";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { useStylesWithTheme } from "../../hooks/useStylesWithTheme";
import { ScrollView } from "react-native";
import { ProfileTable } from "./components/ProfileTable/ProfileTable";
import { ProfileButtons } from "./components/ProfileButtons/ProfileButtons";
import { styles } from "./Profile.styles";
import { Header } from "../../library/Molecules/Header";

export const Profile = ({ navigation }) => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

  return (
    <PageLayout profileMode>
      <Header title={"Player №"} subtitle={"456"} rounded />
      <ScrollView style={stylesWithTheme.page}>
        <ProfileTable />
        <ProfileButtons navigation={navigation} />
      </ScrollView>
    </PageLayout>
  );
};
