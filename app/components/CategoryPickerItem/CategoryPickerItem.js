import React from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import MainText from "../MainText";
import Icon from "../Icon";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container} onPress={onPress}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={70} />
      <MainText style={styles.label}>{item.label}</MainText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
export default CategoryPickerItem;

CategoryPickerItem.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
};
