import React from "react";
import { Text } from "react-native";

import PropTypes from "prop-types";
import stylesMainText from "./stylesMainText";

const MainText = ({ children, style = {} }) => {
  return <Text style={[stylesMainText.text, style]}>{children}</Text>;
};

export default MainText;

MainText.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};
