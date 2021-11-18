import React from "react";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { useStylesWithTheme } from "../../hooks/useStylesWithTheme";
import { ScrollView, View } from "react-native";
import { ProfileBanner } from "./components/ProfileBanner/ProfileBanner";
import { ProfileTable } from "./components/ProfileTable/ProfileTable";
import { ProfileButtons } from "./components/ProfileButtons/ProfileButtons";
import { styles } from "./Profile.styles";

export const Profile = () => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

  return (
    <PageLayout profileMode>
      <ProfileBanner />
      <View style={stylesWithTheme.page}>
        <ProfileTable />
        <ProfileButtons />
      </View>
    </PageLayout>
  );
};
