import React, { useState } from "react";
import "./Employment.css";
import { useFormik, FieldArray, Formik } from "formik";
import * as Yup from "yup";
import formikHelper from "../ValidationHelper/FormikHelper";
import { useDispatch } from "react-redux";
import { UpdateEmployment } from "../../../GlobalStore/Actions/EmploymentAction";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

const validationSchema = Yup.object({
  designation: Yup.string().required("Choose designation"),
  currCompany: Yup.string().required("Choose company"),
  annualSalary: Yup.string().required("Select Annual Salary"),
  annualSalaryTh: Yup.string().required("Select Annual Salary"),
  workingSinceYear: Yup.string().required("Choose Years/Months"),
  workingSinceMonth: Yup.string().required("Choose Years/Months"),
  currentLocation: Yup.string().required("Tell us your current location"),
  skills: Yup.string().required("Enter skills"),
});

const previousCompanySchema = {
  prevDesignation: "",
  prevCompany: "",
  prevDurationMonth: "",
  prevDurationYear: "",
  prevDurationYearTo: "",
  prevDurationMonthTo: "",
};

export default function EmploymentComponent() {
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();

  return (
    <div
      // className="tab-pane fade text-dark"
      id="nav-employment"
      role="tabpanel"
      aria-labelledby="nav-employment-tab"
    >
      <Formik
        initialValues={{
          designation: "",
          currCompany: "",
          annualSalary: "",
          annualSalaryTh: "",
          annualSalaryCurrency: "",
          workingSinceYear: "",
          workingSinceMonth: "",
          currentLocation: "",
          skills: [],
          countryOutside: "",
          noticePeriod: "",
          lastWorkingDayYear: "",
          lastWorkingDayMonth: "",
          lastWorkingDayDate: "",
          newSalaryLakhs: "",
          newSalaryThousand: "",
          newSalaryCurrency: "",
          offerDesig: "",
          newCompany: "",
          industry: "",
          functionalArea: "",
          role: "",
          previousCompany: [previousCompanySchema],
        }}
        onSubmit={(val) => {
          console.log(val);
          dispatch(UpdateEmployment(val));
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="form-horizontal mt-3 empmnt-section"
            role="form"
          >
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right"
              >
                {" "}
                Current Designation
              </label>
              <div className="col-sm-6">
                <select
                  className="selectpicker form-control rounded-0"
                  data-size={5}
                  id="designation"
                  name="designation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.designation}
                >
                  <option value={1}>IT Manager</option>
                  <option value={2}>UI Developer</option>
                  <option value={3}>PHP Developer</option>
                  <option value={4}>Phythan Developer</option>
                  <option value={5}>Angular Developer</option>
                  <option value={6}>Web Designer</option>
                </select>
                {touched.designation && errors.designation && (
                  <div className="text-danger">{errors.designation}</div>
                )}
              </div>
              <div className="col-sm-3">
                <span className="r-text"> Job Title/Role </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right"
              >
                {" "}
                Current Company
              </label>
              <div className="col-sm-6">
                <select
                  className="selectpicker form-control rounded-0"
                  data-size={5}
                  autoFocus
                  id="currCompany"
                  name="currCompany"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currCompany}
                >
                  <option value={1}>Tata Consultancy</option>
                  <option value={2}>Infosys</option>
                  <option value={3}>HCL</option>
                  <option value={4}>Wipro</option>
                </select>
                {formikHelper(touched, errors, "currCompany")}
              </div>
              <div className="col-sm-3">
                <span className="r-text">
                  {" "}
                  Name of the Company/Organization. Where you are currently
                  working.
                </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="phoneNumber"
                className="col-sm-3 col-form-label text-right"
              >
                {" "}
                Annual Salary{" "}
              </label>
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-xs-6 crny-btn">
                    <button
                      onClick={() =>
                        setFieldValue("annualSalaryCurrency", "INR")
                      }
                      className={`btnic ${
                        values.annualSalaryCurrency === "INR" ? "active" : ""
                      }`}
                    >
                      <i className="fa fa-rupee" />
                    </button>
                    <button
                      onClick={() =>
                        setFieldValue("annualSalaryCurrency", "USD")
                      }
                      className={`btnic ${
                        values.annualSalaryCurrency === "USD" ? "active" : ""
                      }`}
                    >
                      <i className="fa fa-dollar" />
                    </button>
                    <select
                      id="annualSalary"
                      name="annualSalary"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.annualSalary}
                      className="selectpicker select-btn rounded-0"
                    >
                      <option>Select</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                    <span> Lakhs </span>
                    {formikHelper(touched, errors, "annualSalary")}
                  </div>
                  <div className="col-sm-6 col-md-6 col-xs-6">
                    <select
                      id="annualSalaryTh"
                      name="annualSalaryTh"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.annualSalaryTh}
                      className="selectpicker select-btn rounded-0"
                    >
                      <option>Select</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                    </select>
                    <span> Thousand </span>
                    {formikHelper(touched, errors, "annualSalaryTh")}
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <span className="r-text"></span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="phoneNumber"
                className="col-sm-3 col-form-label text-right"
              >
                {" "}
                Working Since{" "}
              </label>
              <div className="col-sm-6 crny-btn">
                <select
                  id="workingSinceYear"
                  name="workingSinceYear"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.workingSinceYear}
                  className="selectpicker select-btn rounded-0"
                >
                  <option>Year</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
                <select
                  id="workingSinceMonth"
                  name="workingSinceMonth"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.workingSinceMonth}
                  className="selectpicker select-btn rounded-0"
                >
                  <option>Month</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                </select>
                <span className="px-3">to</span>
                <select className="selectpicker select-btn rounded-0">
                  <option>Present</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
                {formikHelper(touched, errors, "workingSinceYear")}
                {formikHelper(touched, errors, "workingSinceMonth")}
              </div>
              <div className="col-sm-3">
                <span className="r-text"></span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right"
              >
                {" "}
                Current Location
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  placeholder="Tell us about your current location"
                  className="form-control rounded-0"
                  id="currentLocation"
                  name="currentLocation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currentLocation}
                />
                {formikHelper(touched, errors, "currentLocation")}
                <p className="small">
                  <input type="checkbox" className="mt-2" /> Outside India
                </p>
                <select
                  className="mdb-select md-form form-control rounded-0"
                  searchable="Search here.."
                  id="countryOutside"
                  name="countryOutside"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.countryOutside}
                >
                  <option value disabled value={1}>
                    Select Country
                  </option>
                  <option value={1}>USA</option>
                  <option value={2}>Germany</option>
                  <option value={3}>France</option>
                  <option value={3}>Poland</option>
                  <option value={3}>India</option>
                  <option value={3}>Japan</option>
                </select>
              </div>
              <div className="col-sm-6"></div>
              <div className="col-sm-3">
                <span className="r-text"> </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right nostar"
              >
                {" "}
                Duration of Notice Period
              </label>
              <div className="col-sm-6">
                <select
                  id="noticePeriod"
                  name="noticePeriod"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="selectpicker form-control rounded-0"
                  data-size={9}
                >
                  <option value={1}>
                    Select duration of your notice period
                  </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </select>
                <span className="small">
                  <input type="checkbox" className="mt-2" /> Serving notice
                  period
                </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="phoneNumber"
                className="col-sm-3 col-form-label text-right nostar"
              >
                {" "}
                Last Working Day
              </label>
              <div className="col-sm-6">
                <select
                  id="lastWorkingDayYear"
                  name="lastWorkingDayYear"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastWorkingDayYear}
                  className="selectpicker select-btn rounded-0"
                >
                  <option>Select</option>
                  <option>2011</option>
                  <option>2012</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                </select>
                <span> Year </span>
                <select
                  id="lastWorkingDayMonth"
                  name="lastWorkingDayMonth"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastWorkingDayMonth}
                  className="selectpicker select-btn rounded-0"
                >
                  <option>Select</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </select>
                <span> Month </span>
                <select
                  id="lastWorkingDayDate"
                  name="lastWorkingDayDate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastWorkingDayDate}
                  className="selectpicker select-btn rounded-0"
                >
                  <option>Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                </select>
                <span> Date </span>
              </div>
              <div className="col-sm-3">
                <span className="r-text"> </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="phoneNumber"
                className="col-sm-3 col-form-label text-right nostar"
              >
                {" "}
                New Offered Salary{" "}
              </label>
              <div className="col-sm-6 crny-btn">
                <button
                  onClick={() => setFieldValue("newSalaryCurrency", "INR")}
                  className={`btnic ${
                    values.newSalaryCurrency === "INR" ? "active" : ""
                  }`}
                >
                  <i className="fa fa-rupee" />
                </button>
                <button
                  onClick={() => setFieldValue("newSalaryCurrency", "USD")}
                  className={`btnic ${
                    values.newSalaryCurrency === "USD" ? "active" : ""
                  }`}
                >
                  <i className="fa fa-dollar" />
                </button>
                <select
                  id="newSalaryLakhs"
                  name="newSalaryLakhs"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newSalaryLakhs}
                  className="selectpicker select-btn rounded-0"
                >
                  <option>Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
                <span> Lakhs </span>
                <select
                  id="newSalaryThousand"
                  name="newSalaryThousand"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newSalaryThousand}
                  className="selectpicker select-btn rounded-0"
                >
                  <option>Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                </select>
                <span> Thousand </span>
              </div>
              <div className="col-sm-3">
                <span className="r-text"></span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right nostar"
              >
                {" "}
                Offered Designation
              </label>
              <div className="col-sm-6">
                <input
                  id="offerDesig"
                  name="offerDesig"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.offerDesig}
                  type="text"
                  placeholder="New designation offered"
                  className="form-control rounded-0"
                />
              </div>
              <div className="col-sm-3">
                <span className="r-text"> </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right nostar"
              >
                {" "}
                New Company
              </label>
              <div className="col-sm-6">
                <input
                  id="newCompany"
                  name="newCompany"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newCompany}
                  type="text"
                  placeholder="Name of the new organization"
                  className="form-control rounded-0"
                />
              </div>
              <div className="col-sm-3">
                <span className="r-text"> </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right"
              >
                {" "}
                Skills
              </label>
              <div className="col-sm-6">
                <TagsInput
                  value={values.skills}
                  onChange={(tag) => setFieldValue("skills", tag)}
                  // onChange={::this.handleChange}
                />

                {/* <input
                  type="text"
                  placeholder="Enter your areas of expertise/specialization"
                  className="form-control rounded-0"
                  id="skills"
                  name="skils"
                  onBlur={handleBlur}
                  onChange={handleBlur}
                  value={values.skills}
                /> */}
                {formikHelper(touched, errors, "skills")}
              </div>
              <div className="col-sm-3">
                <span className="r-text">
                  Enter your desired role or skills{" "}
                </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right nostar"
              >
                {" "}
                Industry
              </label>
              <div className="col-sm-6">
                <select
                  id="industry"
                  name="industry"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.industry}
                  className="selectpicker form-control rounded-0"
                  data-size={9}
                >
                  <option value={1}>Select industry that you work for</option>
                  <option value={1}>Tata Consultancy</option>
                  <option value={2}>Infosys</option>
                  <option value={3}>HCL</option>
                  <option value={4}>Wipro</option>
                </select>
              </div>
              <div className="col-sm-3">
                <span className="r-text"> </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right nostar"
              >
                {" "}
                Functional Area
              </label>
              <div className="col-sm-6">
                <select
                  id="functionalArea"
                  name="functionalArea"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.functionalArea}
                  className="mdb-select md-form form-control rounded-0"
                >
                  <option value disabled value={1}>
                    Select the department that you work in
                  </option>
                  <option value={1}>Tata Consultancy</option>
                  <option value={2}>Infosys</option>
                  <option value={3}>HCL</option>
                  <option value={4}>Wipro</option>
                </select>
              </div>
              <div className="col-sm-3">
                <span className="r-text"> </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right nostar"
              >
                {" "}
                Role
              </label>
              <div className="col-sm-6">
                <select
                  id="role"
                  name="role"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.role}
                  className="selectpicker form-control rounded-0"
                  data-size={9}
                >
                  <option value={1}>Select the role that you work in</option>
                  <option value={1}>Tata Consultancy</option>
                  <option value={2}>Infosys</option>
                  <option value={3}>HCL</option>
                  <option value={4}>Wipro</option>
                </select>
                <div className="horizontal-line" />
              </div>
              <div className="col-sm-3">
                <span className="r-text"> </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <div className="col-sm-12 offset-sm-3">
                <h6>Previous Employment</h6>
              </div>
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right nostar"
              >
                {" "}
                Designation
              </label>
              <div className="col-sm-6">
                <input
                  id="prevDesignation"
                  name="prevDesignation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prevDesignation}
                  type="text"
                  placeholder="Your job title"
                  className="form-control rounded-0"
                />
              </div>
              <div className="col-sm-3">
                <span className="r-text"> Job Title/Role </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right nostar"
              >
                {" "}
                Company
              </label>
              <div className="col-sm-6">
                <input
                  id="prevCompany"
                  name="prevCompany"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prevCompany}
                  type="text"
                  placeholder="Name of the company/Organization"
                  className="form-control rounded-0"
                />
              </div>
              <div className="col-sm-3">
                <span className="r-text"> </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right nostar"
              >
                {" "}
                Duration
              </label>
              <div className="col-sm-6 crny-btn">
                <select
                  id="prevDurationYear"
                  name="prevDurationYear"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prevDurationYear}
                  className="selectpicker select-btn rounded-0"
                >
                  <option>Year</option>
                  <option>2011</option>
                  <option>2012</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                </select>
                <select
                  id="prevDurationMonth"
                  name="prevDurationMonth"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prevDurationMonth}
                  className="selectpicker select-btn rounded-0"
                >
                  <option>Month</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </select>
                <span className="px-3">to</span>
                <select
                  id="prevDurationYearTo"
                  name="prevDurationYearTo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prevDurationYearTo}
                  className="selectpicker select-btn rounded-0"
                >
                  <option>Year</option>
                  <option>2011</option>
                  <option>2012</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                </select>
                <select
                  id="prevDurationMonthTo"
                  name="prevDurationMonthTo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prevDurationMonthTo}
                  className="selectpicker select-btn rounded-0"
                >
                  <option>Month</option>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </select>
                <div className="horizontal-line" />
              </div>
              <div className="col-sm-3">
                <span className="r-text"> </span>
              </div>
            </div>

            <FieldArray
              name="previousCompany"
              render={(helper) => (
                <>
                  {values.previousCompany.map((company, idx) => {
                    return (
                      <React.Fragment key={`prevCom-${idx}`}>
                        <div className="form-group row mb-4">
                          <div className="col-sm-12 offset-sm-3">
                            <h6>Other Employment</h6>
                          </div>
                          <label
                            htmlFor="Name"
                            className="col-sm-3 col-form-label text-right nostar"
                          >
                            {" "}
                            Designation{" "}
                          </label>
                          <div className="col-sm-6">
                            <input
                              id={`previousEmployment.${idx}.prevDesignation`}
                              name={`previousEmployment.${idx}.prevDesignation`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={
                                values.previousCompany[idx].prevDesignation
                              }
                              type="text"
                              placeholder="Your job title"
                              className="form-control rounded-0"
                            />
                          </div>
                          <div className="col-sm-3">
                            <span className="r-text"> </span>
                          </div>
                        </div>
                        <div className="form-group row mb-4">
                          <label
                            htmlFor="Name"
                            className="col-sm-3 col-form-label text-right nostar"
                          >
                            {" "}
                            Company{" "}
                          </label>
                          <div className="col-sm-6">
                            <input
                              id={`previousEmployment.${idx}.prevCompany`}
                              name={`previousEmployment.${idx}.prevCompany`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.previousCompany[idx].prevCompany}
                              type="text"
                              placeholder="Name of the company/Organization"
                              className="form-control rounded-0"
                            />
                          </div>
                          <div className="col-sm-3">
                            <span className="r-text"> </span>
                          </div>
                        </div>
                        <div className="form-group row mb-1">
                          <label
                            htmlFor="Name"
                            className="col-sm-3 col-form-label text-right nostar"
                          >
                            {" "}
                            Duration
                          </label>
                          <div className="col-sm-6 crny-btn">
                            <select
                              id={`previousEmployment.${idx}.prevDurationYear`}
                              name={`previousEmployment.${idx}.prevDurationYear`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={
                                values.previousCompany[idx].prevDurationYear
                              }
                              className="selectpicker select-btn rounded-0"
                            >
                              <option>Year</option>
                              <option>2011</option>
                              <option>2012</option>
                              <option>2013</option>
                              <option>2014</option>
                              <option>2015</option>
                              <option>2016</option>
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                            </select>
                            <select
                              id={`previousEmployment.${idx}.prevDurationMonth`}
                              name={`previousEmployment.${idx}.prevDurationMonth`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={
                                values.previousCompany[idx].prevDurationMonth
                              }
                              className="selectpicker select-btn rounded-0"
                            >
                              <option>Month</option>
                              <option>Jan</option>
                              <option>Feb</option>
                              <option>Mar</option>
                              <option>April</option>
                              <option>May</option>
                              <option>June</option>
                              <option>July</option>
                              <option>Aug</option>
                              <option>Sep</option>
                              <option>Oct</option>
                              <option>Nov</option>
                              <option>Dec</option>
                            </select>
                            <span className="px-3">to</span>
                            <select
                              id={`previousEmployment.${idx}.prevDurationYearTo`}
                              name={`previousEmployment.${idx}.prevDurationYearTo`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={
                                values.previousCompany[idx].prevDurationYearTo
                              }
                              className="selectpicker select-btn rounded-0"
                            >
                              <option>Year</option>
                              <option>2011</option>
                              <option>2012</option>
                              <option>2013</option>
                              <option>2014</option>
                              <option>2015</option>
                              <option>2016</option>
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                            </select>
                            <select
                              id={`previousEmployment.${idx}.prevDurationMonthTo`}
                              name={`previousEmployment.${idx}.prevDurationMonthTo`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={
                                values.previousCompany[idx].prevDurationMonthTo
                              }
                              className="selectpicker select-btn rounded-0"
                            >
                              <option>Month</option>
                              <option>Jan</option>
                              <option>Feb</option>
                              <option>Mar</option>
                              <option>April</option>
                              <option>May</option>
                              <option>June</option>
                              <option>July</option>
                              <option>Aug</option>
                              <option>Sep</option>
                              <option>Oct</option>
                              <option>Nov</option>
                              <option>Dec</option>
                            </select>
                          </div>
                          <div className="col-sm-3">
                            <span className="r-text"> </span>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </>
              )}
            />

            <div className="form-group row">
              <div className="col-sm-12">
                <div className="text-center conti-btn">
                  <input
                    type="submit"
                    className="submit-btn mt-3"
                    value="Continue"
                  />
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
