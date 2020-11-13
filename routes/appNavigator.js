import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/home";
import { ReviewDetails } from "../screens/reviewDetails";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
        height: 80,
      },
      headerTintColor: "#444",
    }}
  >
    {/* headerMode="none" in navigation*/}
    {/* other options: "float", "screen" */}
    <Screen
      name="Home"
      component={Home}
      options={{
        title: "GameZone",
      }}
    />
    <Screen
      name="ReviewDetails"
      component={ReviewDetails}
      options={{
        title: "Review Details",
      }}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
