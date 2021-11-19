import React, { useState, useCallback } from "react";
import { Input } from "../../../../library/Atoms/Input";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { styles } from "./AuthForm.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { PrimaryButton } from "../../../../library/Atoms/Button/PrimaryButton";
import { BaseButton } from "../../../../library/Atoms/Button/BaseButton";

export const AuthForm = ({ authMode, onSwitchPage }) => {
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
        placeholder={"Enter your password"}
        style={stylesWithTheme.input}
        value={password}
        onChange={onChange}
      />

      <PrimaryButton title={"Submit"} style={stylesWithTheme.button} />

      <BaseButton title={authMode ? "or Sign in" : "or Log in"} onPress={onSwitchPage} />
    </VerticalLayout>
  );
};
