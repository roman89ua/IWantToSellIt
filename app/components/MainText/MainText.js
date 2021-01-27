import React from "react";
import { Text } from "react-native";

import PropTypes from "prop-types";
import defaultStyles from "../../config/styles";

const MainText = ({ children, style = {} }) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default MainText;

MainText.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};
