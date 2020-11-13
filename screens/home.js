import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export const Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
    // navigation.push("ReviewDetails");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="go to review dets" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({});
