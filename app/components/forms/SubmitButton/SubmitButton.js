import React from "react";
import PropTypes from "prop-types";

import AppButton from "../../AppButton";
import { useFormikContext } from "formik";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;

SubmitButton.propTypes = {
  title: PropTypes.string,
};
