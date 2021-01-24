import React from "react";
import { Image, StyleSheet, View } from "react-native";

import PropTypes from "prop-types";
import colors from "../../config/colors";
import MainText from "../MainText";

const Card = ({ title, price, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <MainText style={styles.title}>{title}</MainText>
        <MainText style={styles.subTitle}>{price}</MainText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    fontWeight: "bold",
    color: colors.secondary,
  },
  title: {
    marginBottom: 10,
  },
});

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.number,
};
