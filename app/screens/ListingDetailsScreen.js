import React from "react";
import { Image, StyleSheet, View } from "react-native";
import MainText from "../components/MainText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/clothes1.jpg")} />
      <View style={styles.detailsContainer}>
        <MainText style={styles.title}>Red jacket for sale</MainText>
        <MainText style={styles.price}>$100</MainText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/default_user.jpeg")}
            title="User Name"
            subTitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
};
export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    paddingTop: 40,
  },
});
