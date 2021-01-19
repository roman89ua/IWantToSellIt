import React from "react";
import { Image, StyleSheet, StatusBar, View } from "react-native";
import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={[styles.icons, styles.closeIcon]} />
      <View style={[styles.icons, styles.deleteIcon]} />
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.img}
      />
    </View>
  );
};
export default ViewImageScreen;

const styles = StyleSheet.create({
  icons: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
  },
  closeIcon: {
    backgroundColor: colors.primary,
    left: 30,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    right: 30,
  },
  container: {
    backgroundColor: colors.black,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
