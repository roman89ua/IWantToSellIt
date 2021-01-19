import React from "react";
import { Image, StyleSheet, StatusBar, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={[styles.icons, styles.closeIcon]}>
        <MaterialCommunityIcons name="close" color="white" size={40} />
      </View>
      <View style={[styles.icons, styles.deleteIcon]}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={40}
        />
      </View>
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
    position: "absolute",
    top: 40,
  },
  closeIcon: {
    left: 30,
  },
  deleteIcon: {
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
