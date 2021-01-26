import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const ListingsScreen = () => {
  const initialListings = [
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
    {
      id: 3,
      title: "Red Jacket for sale",
      price: 100,
      image: require("../assets/clothes1.jpg"),
    },
    {
      id: 4,
      title: "Nice red hat for girls",
      price: 25,
      image: require("../assets/redHat.jpeg"),
    },
  ];
  const afterRefreshListings = [
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
  const [listings, setListings] = useState(initialListings);
  const [refreshing] = useState(false);
  const refreshingHandler = () => {
    setListings(afterRefreshListings);
  };
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
        refreshing={refreshing}
        onRefresh={refreshingHandler}
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
