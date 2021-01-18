import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={[styles.button, styles.loginButton]}></View>
      <View style={[styles.button, styles.registerButton]}></View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 70,
  },
  loginButton: {
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 100,
  },
  registerButton: {
    backgroundColor: "#4ecdc4",
  },
});
