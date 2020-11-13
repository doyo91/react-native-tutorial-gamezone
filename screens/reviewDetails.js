import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export const ReviewDetails = ({ navigation }) => {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Button title="go to home" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({});
