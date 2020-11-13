import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack } from "./homeStack";
import { AboutStack } from "./aboutStack";

const { Navigator, Screen } = createDrawerNavigator();

const RootDrawerNavigator = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        display: "none",
        backgroundColor: "#ddd",
      },
      headerTintColor: "#444",
      height: 80,
    }}
  >
    <Screen name="Home" component={HomeStack} />
    <Screen name="About" component={AboutStack} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <RootDrawerNavigator />
  </NavigationContainer>
);
