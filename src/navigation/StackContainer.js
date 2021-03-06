import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Preview } from "../pages/Preview/Preview";
import { Auth } from "../pages/Auth/Auth";
import { DrawerContainer } from "./DrawerContainer";
import { TableGame } from "../pages/TableGame/TableGame";
import { DrawGame } from "../pages/DrawGame/DrawGame";
import { ColorsGame } from "../pages/ColorsGame/ColorsGame";
import { Splash } from "../pages/Splash/Splash";

const Stack = createStackNavigator();

export const StackContainer = () => (
  <Stack.Navigator
    initialRouteName={"Splash"}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Preview" component={Preview} />
    <Stack.Screen name="DrawerContainer" component={DrawerContainer} />
    <Stack.Screen name="Auth" component={Auth} />
    <Stack.Screen name="FirstGame" component={TableGame} />
    <Stack.Screen name="SecondGame" component={DrawGame} />
    <Stack.Screen name="ThirdGame" component={ColorsGame} />
  </Stack.Navigator>
);
