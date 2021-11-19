import React, { useState, useCallback } from "react";
import { KeyboardAvoidingView } from "react-native";
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
import { useToggle } from "../../../../hooks/useToggle";
import { useNavigation } from "@react-navigation/native";

export const AuthForm = ({ authMode, onSwitchPage }) => {
  const { navigate } = useNavigation();

  const dispatch = useDispatch();
  const [stylesWithTheme] = useStylesWithTheme(styles);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [submitting, toggleSubmitting] = useToggle(false);

  const onChange = useCallback(
    (name, value) => {
      if (name === "email") setEmail(value);
      if (name === "password") setPassword(value);
      if (name === "username") setUsername(value);
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
    toggleSubmitting();

    if (authMode) {
      api
        .login({ email, password })
        .then(data => {
          toggleSubmitting();

          const token = data.data.token;

          // Save token to redux and storage
          dispatch(setAction("token", token));
          SecureStorage.setItem("token", token);

          // Get user info and save to redux
          api.me(token).then(data => dispatch(setAction("user", data.data)));
          Toast.show("Signed in successfully!");
          navigate("DrawerContainer");
        })
        .catch(err => {
          toggleSubmitting();
          catchAuthError(err);
        });
    } else {
      api
        .register({ email, password, username })
        .then(data => {
          toggleSubmitting();

          const user = data.data;

          api.login({ email, password }).then(data => {
            const token = data.data.token;

            // Save token to redux and storage
            dispatch(setAction("token", token));
            SecureStorage.setItem("token", token);

            // Save user info to redux
            dispatch(setAction("user", user));
            Toast.show("Signed up successfully!");
            navigate("DrawerContainer");
          });
        })
        .catch(err => {
          toggleSubmitting();
          catchAuthError(err);
        });
    }
  }, [email, password, authMode]);

  return (
    <VerticalLayout style={stylesWithTheme.form}>
      <KeyboardAvoidingView behavior={"height"} keyboardVerticalOffset={40}>
        <Input
          name={"email"}
          label={"Email"}
          placeholder={"Enter your email"}
          style={stylesWithTheme.input}
          value={email}
          onChange={onChange}
        />

        {!authMode && (
          <Input
            name={"username"}
            label={"Username"}
            placeholder={"Enter your username"}
            style={stylesWithTheme.input}
            value={username}
            onChange={onChange}
          />
        )}

        <Input
          name={"password"}
          label={"Password"}
          secureTextEntry={true}
          placeholder={"Enter your password"}
          style={stylesWithTheme.input}
          value={password}
          onChange={onChange}
        />

        <PrimaryButton title={"Submit"} style={stylesWithTheme.button} onPress={onSubmit} loading={submitting} />

        <BaseButton title={authMode ? "or Sign up" : "or Sign in"} onPress={onSwitchPage} />
      </KeyboardAvoidingView>
    </VerticalLayout>
  );
};
