import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import MainText from "../MainText";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MainText style={styles.text}>{item.label}</MainText>
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
  item: PropTypes.object,
  onPress: PropTypes.func,
};
