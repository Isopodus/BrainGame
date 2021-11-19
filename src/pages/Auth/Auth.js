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

  const [isLogin, openLogin, openSignIn] = useOpenClose(true);

  return (
    <PageLayout>
      <Header title={isLogin ? "Sign in" : "Sign up"} navigation={navigation} showEqual={false} />

      <AuthForm navigation={navigation} authMode={isLogin} onSwitchPage={isLogin ? openSignIn : openLogin} />

      <View style={stylesWithTheme.bottomCircle} />
    </PageLayout>
  );
};
