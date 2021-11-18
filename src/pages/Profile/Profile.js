import React from "react";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { useStylesWithTheme } from "../../hooks/useStylesWithTheme";
import { ScrollView, View } from "react-native";
import { ProfileBanner } from "./components/ProfileBanner/ProfileBanner";
import { ProfileTable } from "./components/ProfileTable/ProfileTable";
import { ProfileButtons } from "./components/ProfileButtons/ProfileButtons";

export const Profile = ({ navigation }) => {
  //   const [stylesWithTheme] = useStylesWithTheme(styles);

  return (
    <PageLayout profileMode>
      <ProfileBanner />
      <ScrollView>
        <ProfileTable />
        <ProfileButtons navigation={navigation} />
      </ScrollView>
    </PageLayout>
  );
};
