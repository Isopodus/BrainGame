import React from "react";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { useStylesWithTheme } from "../../hooks/useStylesWithTheme";
import { View } from "react-native";
import { ProfileTable } from "./components/ProfileTable/ProfileTable";
import { ProfileButtons } from "./components/ProfileButtons/ProfileButtons";
import { styles } from "./Profile.styles";
import { Header } from "../../library/Molecules/Header";

export const Profile = () => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

  return (
    <PageLayout profileMode>
      <Header title={"Player №"} subtitle={"456"} rounded />
      <View style={stylesWithTheme.page}>
        <ProfileTable />
        <ProfileButtons />
      </View>
    </PageLayout>
  );
};
