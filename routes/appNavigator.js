import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/home";
import { ReviewDetails } from "../screens/reviewDetails";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator>
    {/* headerMode="none" in navigation*/}
    {/* other options: "float", "screen" */}
    <Screen name="Home" component={Home} />
    <Screen name="ReviewDetails" component={ReviewDetails} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
