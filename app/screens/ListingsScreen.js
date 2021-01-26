import React from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import { FlatList } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../assets/clothes1.jpg"),
  },
  {
    id: 2,
    title: "Nice red hat for girls",
    price: 25,
    image: require("../assets/redHat.jpeg"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image}
            price={"$" + item.price}
          />
        )}
      />
    </Screen>
  );
};
export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
