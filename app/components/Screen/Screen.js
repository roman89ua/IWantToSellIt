import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Constants from "expo-constants";
import PropTypes from "prop-types";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

Screen.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};
