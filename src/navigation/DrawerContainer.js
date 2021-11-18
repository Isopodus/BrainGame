import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../Home/Home";
import { Profile } from "../Profile/Profile";
import { Auth } from "../Auth/Auth";
import { DrawerContent } from "../library/Molecules/Drawer";

const Drawer = createDrawerNavigator();

export const DrawerContainer = ({ navigation }) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      // drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Auth" component={Auth} />
    </Drawer.Navigator>
  );
};
