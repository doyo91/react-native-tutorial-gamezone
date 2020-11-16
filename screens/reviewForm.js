import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Formik } from "formik";

export const ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {
          addReview(values);
        }}
      >
        {(formikprops) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={formikprops.handleChange("title")}
              value={formikprops.values.title}
            />
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Review body"
              onChangeText={formikprops.handleChange("body")}
              value={formikprops.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={formikprops.handleChange("rating")}
              value={formikprops.values.rating}
              keyboardType="numeric"
            />
            <Button
              title="submit"
              color="maroon"
              onPress={formikprops.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
