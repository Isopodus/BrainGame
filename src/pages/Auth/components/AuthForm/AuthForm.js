import React, { useState, useCallback } from "react";
import Toast from "react-native-simple-toast";
import SecureStorage from "react-native-secure-storage";
import { Input } from "../../../../library/Atoms/Input";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { useDispatch } from "react-redux";
import { styles } from "./AuthForm.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { PrimaryButton } from "../../../../library/Atoms/Button/PrimaryButton";
import { BaseButton } from "../../../../library/Atoms/Button/BaseButton";
import { api } from "../../../../requests/api";
import { setAction } from "../../../../../store";

export const AuthForm = ({ navigation, authMode, onSwitchPage }) => {
  const dispatch = useDispatch();
  const [stylesWithTheme] = useStylesWithTheme(styles);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = useCallback(
    (name, value) => {
      if (name === "email") setEmail(value);
      if (name === "password") setPassword(value);
    },
    [setEmail, setPassword],
  );

  const catchAuthError = useCallback(err => {
    if (err.response?.status === 404 || err.response?.status === 400) {
      if (err.response?.data?.error === "Validation error" || err.response?.data?.error === "Password is invalid.") {
        Toast.show("Invalid credentials");
      } else {
        Toast.show(err.response.data.error);
      }
    } else {
      console.log(err, err.response?.data);
    }
  });

  const onSubmit = useCallback(() => {
    if (authMode) {
      api
        .login({ email, password })
        .then(data => {
          const token = data.data.token;

          // Save token to redux and storage
          dispatch(setAction("token", token));
          SecureStorage.setItem("token", token);

          // Get user info and save to redux
          api.me(token).then(data => dispatch(setAction("user", data.data)));
          Toast.show("Signed in successfully!");
          navigation.navigate("DrawerContainer");
        })
        .catch(catchAuthError);
    } else {
      api
        .register({ email, password, username: "Test" })
        .then(data => {
          const user = data.data;

          api.login({ email, password }).then(data => {
            const token = data.data.token;

            // Save token to redux and storage
            dispatch(setAction("token", token));
            SecureStorage.setItem("token", token);

            // Save user info to redux
            dispatch(setAction("user", user));
            Toast.show("Signed up successfully!");
            navigation.navigate("DrawerContainer");
          });
        })
        .catch(catchAuthError);
    }
  }, [email, password, authMode]);

  return (
    <VerticalLayout style={stylesWithTheme.form}>
      <Input
        name={"email"}
        label={"Email"}
        placeholder={"Enter your email"}
        style={stylesWithTheme.input}
        value={email}
        onChange={onChange}
      />

      <Input
        name={"password"}
        label={"Password"}
        secureTextEntry={true}
        placeholder={"Enter your password"}
        style={stylesWithTheme.input}
        value={password}
        onChange={onChange}
      />

      <PrimaryButton title={"Submit"} style={stylesWithTheme.button} onPress={onSubmit} />

      <BaseButton title={authMode ? "or Sign up" : "or Sign in"} onPress={onSwitchPage} />
    </VerticalLayout>
  );
};
