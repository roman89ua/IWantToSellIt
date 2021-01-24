import React from "react";
import { View } from "react-native";

import PropTypes from "prop-types";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size / 2} />
    </View>
  );
};

export default Icon;

// const styles = StyleSheet.create({
//   iconContainer: {},
// });

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
  iconColor: PropTypes.string,
};
