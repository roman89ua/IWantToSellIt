import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../../AppPicker";

import PropTypes from "prop-types";
import ValidationErrorMessage from "../../ValidationErrorMessage";

const AppFormPicker = ({ items, name, placeholder, width }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ValidationErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;

AppFormPicker.propTypes = {
  items: PropTypes.array,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};
