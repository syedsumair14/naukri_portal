import React from "react";

export default function formikHelper(formik, name) {
  return (
    formik.touched[name] &&
    formik.errors[name] && (
      <div className="text-danger">{formik.errors[name]}</div>
    )
  );
}
