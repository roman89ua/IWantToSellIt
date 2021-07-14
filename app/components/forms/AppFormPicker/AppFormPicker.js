import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../../AppPicker";

import PropTypes from "prop-types";
import ValidationErrorMessage from "../../ValidationErrorMessage";

const AppFormPicker = ({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
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
  numberOfColumns: PropTypes.number,
  PickerItemComponent: PropTypes.func,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
