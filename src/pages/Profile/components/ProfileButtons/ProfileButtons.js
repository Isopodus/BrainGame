import React, { useCallback, useState } from "react";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { styles } from "./ProfileButtons.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { PrimaryButton } from "../../../../library/Atoms/Button/PrimaryButton";
import { BaseButton } from "../../../../library/Atoms/Button/BaseButton";
import { View } from "react-native";

export const ProfileButtons = ({ navigation }) => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onPressBack = useCallback(navigation.goBack);
  const onPressAuth = useCallback(() => navigation.navigate("Auth"));

  return (
    <VerticalLayout style={stylesWithTheme.container}>
      {!isLoggedIn && (
        <PrimaryButton
          title={"Log in or Sign up"}
          style={stylesWithTheme.button}
          secondaryColor
          onPress={onPressAuth}
        />
      )}
      <PrimaryButton title={"Move to score table"} style={stylesWithTheme.button} secondaryColor />
      {isLoggedIn && <PrimaryButton title={"Log out"} style={stylesWithTheme.button} secondaryColor />}
      <BaseButton title={"Back to the game"} style={stylesWithTheme.button} onPress={onPressBack} />
    </VerticalLayout>
  );
};
