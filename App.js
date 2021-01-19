import React from "react";
import Card from "./app/components/Card";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Card
        title="Red jeccket for sale"
        price="$100"
        image={require("./app/assets/clothes1.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
