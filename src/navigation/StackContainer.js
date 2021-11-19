import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Preview } from "../pages/Preview/Preview";
import { Auth } from "../pages/Auth/Auth";
import { DrawerContainer } from "./DrawerContainer";

const Stack = createStackNavigator();

export const StackContainer = () => {
  return (
    <Stack.Navigator
      initialRouteName={"DrawerContainer"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Preview" component={Preview} />
      <Stack.Screen name="DrawerContainer" component={DrawerContainer} />
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
};
