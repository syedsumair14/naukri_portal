import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./style.css";
import { useDispatch } from "react-redux";
import { login } from "../../GlobalStore/Actions/loginAction";
import { Link } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, onSubmitProps) => {
      console.log(values, "data");
      dispatch(login(values));
      onSubmitProps.setSubmitting(false);
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Input valid email").required("Required"),
      password: Yup.string().required("Required!"),
    }),
  });

  return (
    <div className="row">
      <div className="col-md-6 login-form-1 mt-5">
        <form onSubmit={formik.handleSubmit}>
          <h3 className="text-center mb-3">Login</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              id="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              id="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger">{formik.errors.password}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
              className={`form-control btnSubmit ${
                !formik.isValid ? `disabled` : ""
              }`}
              value="LOGIN"
            />
          </div>
          <div className="form-group text-center">
            <Link to="/register" className="ForgetPwd">
              New Register Here{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
