import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";

export const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
