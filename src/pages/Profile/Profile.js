import React from "react";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { useStylesWithTheme } from "../../hooks/useStylesWithTheme";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native";
import { ProfileTable } from "./components/ProfileTable/ProfileTable";
import { ProfileButtons } from "./components/ProfileButtons/ProfileButtons";
import { styles } from "./Profile.styles";
import { Header } from "../../library/Molecules/Header";

export const Profile = ({ navigation }) => {
  const [stylesWithTheme] = useStylesWithTheme(styles);
  const user = useSelector(state => state.user);

  return (
    <PageLayout profileMode>
      <Header title={"Player №"} subtitle={user.number} rounded />
      <ScrollView style={stylesWithTheme.page}>
        <ProfileTable user={user} />
        <ProfileButtons user={user} navigation={navigation} />
      </ScrollView>
    </PageLayout>
  );
};
