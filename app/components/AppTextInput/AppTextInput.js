import React from "react";
import { Platform, TextInput, StyleSheet, View } from "react-native";

import PropTypes from "prop-types";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../Screen";

export const isAndroidOS = Platform.OS === "android";

const AppTextInput = ({ iconName, placeholder }) => {
  return (
    <Screen>
      <View style={styles.container}>
        {iconName && (
          <MaterialCommunityIcons
            name={iconName}
            size={20}
            color={colors.medium}
            style={styles.icon}
          />
        )}
        <TextInput style={styles.textInput} placeholder={placeholder} />
      </View>
    </Screen>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: isAndroidOS ? "Roboto" : "Avenir",
    color: colors.dark,
  },
});

AppTextInput.propTypes = {
  iconName: PropTypes.string,
  placeholder: PropTypes.string,
};
