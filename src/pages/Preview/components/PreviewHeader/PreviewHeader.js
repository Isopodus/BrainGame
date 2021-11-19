import React, { useCallback } from "react";
import SecureStorage from "react-native-secure-storage";
import { Text } from "react-native";
import { styles } from "./PreviewHeader.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { useDispatch } from "react-redux";
import { PrimaryButton } from "../../../../library/Atoms/Button/PrimaryButton";
import { setAction } from "../../../../../store";
import { api } from "../../../../requests/api";

export const PreviewHeader = ({ navigation }) => {
  const dispatch = useDispatch();
  const [stylesWithTheme] = useStylesWithTheme(styles);

  const onOpenHomeScreen = useCallback(() => {
    SecureStorage.getItem("token").then(token => {
      if (!token) {
        navigation.navigate("Auth");
      } else {
        // Save token to redux
        dispatch(setAction("token", token));

        // Get user info and save to redux
        api.me(token).then(data => {
          dispatch(setAction("user", data.data));
          navigation.navigate("DrawerContainer");
        });
      }
    });
  });

  return (
    <VerticalLayout style={stylesWithTheme.container}>
      <VerticalLayout>
        <Text style={stylesWithTheme.subtitle}>Welcome to</Text>
        <Text style={[stylesWithTheme.title, stylesWithTheme.leftText]}>Brain</Text>
        <Text style={[stylesWithTheme.title, stylesWithTheme.rightText]}>Game</Text>
      </VerticalLayout>
      <PrimaryButton title={"Start game"} style={stylesWithTheme.button} onPress={onOpenHomeScreen} />
    </VerticalLayout>
  );
};
