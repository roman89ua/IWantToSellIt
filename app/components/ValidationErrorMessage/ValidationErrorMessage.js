import React from "react";
import { StyleSheet } from "react-native";
import MainText from "../MainText";
import { PropTypes } from "prop-types";
import colors from "../../config/colors";

const ValidationErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <MainText style={styles.errorMessage}>{error}</MainText>;
};

const styles = StyleSheet.create({
  errorMessage: {
    color: colors.error,
  },
});

export default ValidationErrorMessage;

ValidationErrorMessage.propTypes = {
  error: PropTypes.any,
  visible: PropTypes.any,
};
