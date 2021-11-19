import React from "react";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { useStylesWithTheme } from "../../hooks/useStylesWithTheme";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native";
import { ProfileTable } from "./components/ProfileTable/ProfileTable";
import { ProfileButtons } from "./components/ProfileButtons/ProfileButtons";
import { styles } from "./Profile.styles";
import { Header } from "../../library/Molecules/Header";

export const Profile = () => {
  const [stylesWithTheme] = useStylesWithTheme(styles);
  const user = useSelector(state => state.user);

  return (
    <PageLayout profileMode>
      <Header
        title={"Player №"}
        subtitle={user.number.toString().length < 3 ? `0${user.number}` : user.number}
        rounded
      />
      <ScrollView style={stylesWithTheme.page}>
        <ProfileTable user={user} />
        <ProfileButtons user={user} />
      </ScrollView>
    </PageLayout>
  );
};
