import React from "react";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";

import AppTextInput from "../../AppTextInput";
import ValidationErrorMessage from "../../ValidationErrorMessage";

const AppFormField = ({ name, width, ...otherProps }) => {
  const { errors, handleChange, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ValidationErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;

AppFormField.propTypes = {
  name: PropTypes.string,
  otherProps: PropTypes.object,
};
