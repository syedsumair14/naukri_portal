import React from "react";
import "./Personal.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const PHONE_REGEX = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default function PersonalComponent() {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values, onSubmitProps) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      Name: Yup.string().required("Invalid Name"),
      email: Yup.string().email("Enter Valid Email").required("Cant Be Empty"),
      password: Yup.string()
        .required("No password provided")
        .min(6, "Too short! Enter Min 6 character"),
      mobilenumber: Yup.string()
        .required("No mobile number provided")
        .matches(PHONE_REGEX, "Enter a valid number"),
    }),
  });

  return (
    <div
      className="tab-pane fade show active"
      id="nav-personal"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div className="col-md-12 mt-3">
        <form className="form-horizontal personal-detail" role="form">
          <div className="form-group row mb-4">
            <label
              htmlFor="Name"
              className="col-sm-3 col-form-label text-right"
            >
              Name
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Enter your name"
                className="form-control rounded-0"
                {...formik.getFieldProps("Name")}
              />
              {formik.touched.Name && formik.errors.Name && (
                <div className="text-danger">{formik.errors.Name}</div>
              )}
            </div>
            <div className="col-sm-3">
              <div className="ggle-login">
                <div className="vertical-line">
                  <span className="ggle-text">or</span>
                </div>
                <p className="mb-0">Fill my details from</p>
                <a className="btn btn-lg btn-google" href="#">
                  <img src="/dependencies/img/google.png" /> <span>Google</span>
                </a>
                <p className="r-text">
                  We will not post anything without your permission.
                </p>
              </div>
            </div>
          </div>
          <div className="form-group row mb-4">
            <label
              htmlFor="email"
              className="col-sm-3 col-form-label text-right"
            >
              Email
            </label>
            <div className="col-sm-6">
              <input
                name="email"
                type="email"
                id="email"
                placeholder="Enter your email"
                className="form-control rounded-0"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-danger">{formik.errors.email}</div>
              )}
            </div>
            <div className="col-sm-3">
              <span className="r-text"></span>
            </div>
          </div>
          <div className="form-group row mb-4">
            <label
              htmlFor="password"
              className="col-sm-3 col-form-label text-right"
            >
              Password
            </label>
            <div className="col-sm-6">
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Minimum 6 characters"
                className="form-control rounded-0"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
            </div>
            <div className="col-sm-3">
              <span className="r-text">
                {" "}
                Password is Case-Sensitive. Use 6 to 40 characters.{" "}
              </span>
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="mobilenumber"
              className="col-sm-3 col-form-label text-right"
            >
              Mobile Number{" "}
            </label>
            <div className="col-sm-6">
              <input
                name="mobilenumber"
                type="mobilenumber"
                id="mobilenumber"
                placeholder="When recruiter can contact you"
                className="form-control rounded-0"
                {...formik.getFieldProps("mobilenumber")}
              />
              {formik.touched.mobilenumber && formik.errors.mobilenumber && (
                <div className="text-danger">{formik.errors.mobilenumber}</div>
              )}
            </div>
            <div className="col-sm-3">
              <span className="r-text">
                {" "}
                Recruiters will contact you on this number.{" "}
              </span>
            </div>
          </div>
          <div className="form-group row mb-4">
            <label
              htmlFor="phoneNumber"
              className="col-sm-3 col-form-label text-right"
            >
              Total Work Experience{" "}
            </label>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-xs-6">
                  <select className="selectpicker select-btn rounded-0">
                    <option>Select</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  <span> Year(s) </span>
                </div>
                <div className="col-sm-6 col-md-6 col-xs-6">
                  <select className="selectpicker select-btn rounded-0">
                    <option>Select</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  <span> Month(s) </span>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <span className="r-text">
                {" "}
                Tell us your total experience to get relevant job
                recommendations{" "}
              </span>
            </div>
          </div>
          <div className="form-group row mb-2">
            <label className="col-sm-3 col-form-label text-right">
              Upload Resume{" "}
            </label>
            <div className="col-sm-9">
              <span className="file btn upload-btn">
                {" "}
                Upload Resume
                <input type="file" name="file" />
              </span>
              <span className="info upload-btn-text">
                {" "}
                doc, docx, rtf, pdf - 2MB max{" "}
              </span>
              {/* <p className="or-btn text-mute ml-5 mb-0">- or -</p>
              <a href className="primary-link">
                copy-paste your resume here
              </a> */}
              <br />
              <input type="checkbox" className="mt-3" />
              <label className="chkboxbtn">
                I agreed to the <a href="#"> Terms and Conditions.</a>
              </label>
            </div>
          </div>
          <div className="form-group row mb-4">
            <div className="col-sm-12">
              <div className="text-center">
                <button type="submit" className="submit-btn mt-3">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
