import React, { useEffect } from "react";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { Animation } from "../../library/Atoms/Animations";
import { useNavigation } from "@react-navigation/native";
import SecureStorage from "react-native-secure-storage";
import { api } from "../../requests/api";
import { useDispatch } from "react-redux";

export const Splash = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      SecureStorage.getItem("token").then(token => {
        if (!token) {
          navigate("Preview");
          return;
        }

        // Save token to redux
        dispatch(setAction("token", token));

        // Get user info and save to redux
        api.me(token).then(data => {
          dispatch(setAction("user", data.data));
          navigate("Preview");
        });
      });
    }, 6000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <PageLayout>
      <Animation name={"loader"} />
    </PageLayout>
  );
};
