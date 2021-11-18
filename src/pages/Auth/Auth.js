import React from "react";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { Header } from "../../library/Molecules/Header";
import { useStylesWithTheme } from "../../hooks/useStylesWithTheme";
import { styles } from "./Auth.styles";
import { View } from "react-native";
import { useOpenClose } from "../../hooks/useOpenClose";
import { AuthForm } from "./components/AuthForm/AuthForm";

export const Auth = ({ navigation }) => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

  const [isLogin, openLogin, openSignIn] = useOpenClose(false);

  return (
    <PageLayout>
      <Header title={isLogin ? "Log in" : "Sign in"} navigation={navigation} />

      <AuthForm authMode={isLogin} onSwitchPage={isLogin ? openSignIn : openLogin} />

      <View style={stylesWithTheme.bottomCircle} />
    </PageLayout>
  );
};
