import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import MainText from "../MainText";

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MainText style={styles.text}>{label}</MainText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
export default PickerItem;

PickerItem.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
};
