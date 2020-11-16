import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "../shared/card";
import { globalStyles } from "../styles/globalStyles";

export const ReviewDetails = ({ route, navigation }) => {
  const { title, rating, body } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <Text>{rating}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({});
