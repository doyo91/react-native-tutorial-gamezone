import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export const ReviewDetails = ({ route, navigation }) => {
  const { title, rating, body } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
