import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/home";
import { ReviewDetails } from "../screens/reviewDetails";

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => (
  <Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
        height: 80,
      },
      headerTintColor: "#444",
    }}
  >
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
