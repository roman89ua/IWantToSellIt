import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";

const AppForm = ({ children, initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;

AppForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
  validationSchema: PropTypes.object,
  children: PropTypes.array,
};
