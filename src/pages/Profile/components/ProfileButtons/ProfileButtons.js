import React, { useCallback } from "react";
import SecureStorage from "react-native-secure-storage";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./ProfileButtons.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { PrimaryButton } from "../../../../library/Atoms/Button/PrimaryButton";
import { BaseButton } from "../../../../library/Atoms/Button/BaseButton";
import { setAction } from "../../../../../store";
import { api } from "../../../../requests/api";
import { useNavigation } from "@react-navigation/native";
import { useToggle } from "../../../../hooks/useToggle";

export const ProfileButtons = ({ user }) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const token = useSelector(state => state.token);

  const [stylesWithTheme] = useStylesWithTheme(styles);

  const [logoutLoading, toggleLogoutLoading] = useToggle(false);

  const onPressBack = useCallback(() => navigate("Home"), []);

  const onPressAuth = useCallback(() => navigate("Auth"), []);

  const onPressLogout = useCallback(() => {
    toggleLogoutLoading();
    api.logout(token).then(() => {
      toggleLogoutLoading();
      dispatch(setAction("user", null));
      dispatch(setAction("token", null));
      SecureStorage.removeItem("token");
      navigate("Preview");
    });
  }, []);

  const onPressRating = useCallback(() => navigate("Rating"), []);

  return (
    <VerticalLayout style={stylesWithTheme.container}>
      {!user.id && (
        <PrimaryButton
          title={"Log in or Sign up"}
          style={stylesWithTheme.button}
          secondaryColor
          onPress={onPressAuth}
        />
      )}
      <PrimaryButton title={"Leaderboard"} style={stylesWithTheme.button} secondaryColor onPress={onPressRating} />
      {user.id && (
        <PrimaryButton
          title={"Log out"}
          style={stylesWithTheme.button}
          secondaryColor
          onPress={onPressLogout}
          loading={logoutLoading}
        />
      )}
      <BaseButton title={"Back to the menu"} style={stylesWithTheme.button} onPress={onPressBack} />
    </VerticalLayout>
  );
};
