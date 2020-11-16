import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { About } from "../screens/about";
import { Header } from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

export const AboutStack = ({ navigation }) => (
  <Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
      },
      headerTintColor: "#444",
      height: 80,
    }}
  >
    <Screen
      name="About"
      component={About}
      options={{
        header: () => <Header navigation={navigation} title="About GameZone" />,
      }}
    />
  </Navigator>
);
