import React, { useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Preview } from "./src/pages/Preview/Preview";
import { DrawerContainer } from "./src/pages/DrawerContainer/DrawerContainer";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const App = () => {
  const navigationRef = useRef();

  // useEffect(() => {
  //   navigationRef.current.navigate("Home");
  // }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={"Preview"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Preview" component={Preview} />
        <Stack.Screen name="DrawerContainer" component={DrawerContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
