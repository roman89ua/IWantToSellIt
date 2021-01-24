import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";

import PropTypes from "prop-types";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

ListItemDeleteAction.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  image: PropTypes.number,
  onPress: PropTypes.func,
  renderRightActions: PropTypes.func,
};
