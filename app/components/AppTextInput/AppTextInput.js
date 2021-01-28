import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

import PropTypes from "prop-types";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../config/styles";

const AppTextInput = ({ iconName, placeholder, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={defaultStyles.text}
        placeholder={placeholder}
        {...otherProps}
      />
    </View>
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
});

AppTextInput.propTypes = {
  iconName: PropTypes.string,
  placeholder: PropTypes.string,
};
