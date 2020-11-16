import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/home";
import { ReviewDetails } from "../screens/reviewDetails";
import { Header } from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({ navigation }) => (
  <Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
      },
      headerTintColor: "#444",
    }}
  >
    <Screen
      name="Home"
      component={Home}
      options={{
        header: () => <Header navigation={navigation} title="GameZone" />,
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
