import React from "react";

export default function formikHelper(touched, errors, name) {
  return (
    touched[name] &&
    errors[name] && <div className="text-danger">{errors[name]}</div>
  );
}
