import React, { useState, useEffect } from "react";
import "./Personal.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../../GlobalStore/Actions/registerUser";
import { useDispatch, useSelector } from "react-redux";
import { saveLogin } from "../../../GlobalStore/Reducers/loginReducer";

const PHONE_REGEX = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default function PersonalComponent() {
  const [file, setFile] = useState(null);
  const [customErrors, setCustomErrors] = useState({});

  const dispatch = useDispatch();

  const FILE_SIZE = 1414 * 1414;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];
  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      password: "",
      mobilenumber: "",
      workExpYear: "",
      workExpMonth: "",
      // resume: "",
      terms: false,
    },
    onSubmit: (values, onSubmitProps) => {
      if (!file) {
        return setCustomErrors({ ...customErrors, fileError: "Uplaod resume" });
      }
      if (Object.keys(customErrors).length === 0) {
        console.log({ ...values, file }, "submit this");
        // onSubmitProps.resetForm();
        let body = {
          ...values,
          resume: file,
        };
        dispatch(registerUser(body));
      }
      // onSubmitProps.setSubmitting(false);
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
      workExpYear: Yup.string().required("Enter Years"),
      workExpMonth: Yup.string().required("Enter Months"),
      // resume: Yup.mixed().required("Upload valid resume"),
      terms: Yup.bool().oneOf([true], "Agree to terms and conditions"),
    }),
  });

  useEffect(() => {
    if (file && file.size > 2000000) {
      return setCustomErrors({
        ...customErrors,
        fileError: "Upload file less than 2 MB",
      });
    }
    setCustomErrors({});
  }, [file]);

  return (
    <div
      className="tab-pane fade show active"
      id="nav-personal"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <div className="col-md-12 mt-3">
        <form
          onSubmit={formik.handleSubmit}
          className="form-horizontal personal-detail"
          role="form"
        >
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
                value={formik.values.Name}
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
                  <select
                    name="workExpYear"
                    id="workExpYear"
                    {...formik.getFieldProps("workExpYear")}
                    className="selectpicker select-btn rounded-0"
                  >
                    <option>Select</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  <span> Year(s) </span>
                  {formik.touched.workExpYear && formik.errors.workExpYear && (
                    <div className="text-danger">
                      {formik.errors.workExpYear}
                    </div>
                  )}
                </div>
                <div className="col-sm-6 col-md-6 col-xs-6">
                  <select
                    name="workExpMonth"
                    id="workExpMonth"
                    {...formik.getFieldProps("workExpMonth")}
                    className="selectpicker select-btn rounded-0"
                  >
                    <option>Select</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  <span> Month(s) </span>
                  {formik.touched.workExpMonth &&
                    formik.errors.workExpMonth && (
                      <div className="text-danger">
                        {formik.errors.workExpMonth}
                      </div>
                    )}
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
                <input
                  name="resume"
                  id="resume"
                  // {...formik.getFieldProps("resume")}
                  type="file"
                  name="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </span>
              <span className="info upload-btn-text">
                {" "}
                doc, docx, rtf, pdf - 2MB max{" "}
              </span>
              {file && <div className="font-weight-bold">{file.name}</div>}
              {/* {formik.touched.resume && formik.errors.resume && (
                <div className="text-danger">{formik.errors.resume}</div>
              )} */}
              {customErrors.fileError && (
                <div className="text-danger">{customErrors.fileError}</div>
              )}
              {/* <p className="or-btn text-mute ml-5 mb-0">- or -</p>
              <a href className="primary-link">
                copy-paste your resume here
              </a> */}
              <br />
              <input
                id="terms"
                name="terms"
                {...formik.getFieldProps("terms")}
                type="checkbox"
                className="mt-3"
                checked={formik.values.terms}
                onChange={() =>
                  formik.setFieldValue("terms", !formik.values.terms)
                }
              />
              <label className="chkboxbtn">
                I agreed to the <a href="#"> Terms and Conditions.</a>
              </label>
              {formik.touched && formik.errors.terms && (
                <div className="text-danger">{formik.errors.terms}</div>
              )}
            </div>
          </div>
          <div className="form-group row mb-4">
            <div className="col-sm-12">
              <div className="text-center">
                <input
                  type="submit"
                  // onClick={formik.handleSubmit}
                  className="submit-btn mt-3"
                  value="Register now"
                  // disabled={!formik.isValid || formik.isSubmitting}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
