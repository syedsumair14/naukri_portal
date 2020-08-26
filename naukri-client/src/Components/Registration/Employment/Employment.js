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
  workingSinceYear: Yup.string().required("Choose Years"),
  workingSinceMonth: Yup.string().required("Choose Months"),
  workingEndYear: Yup.string().required("Choose year"),
  currentLocation: Yup.string().required("Tell us your current location"),
  skills: Yup.string().required("Enter skills"),
});

const previousCompanySchema = {
  previous_employement_designation: "",
  previous_employement_company: "",
  previous_employement_start_month: "",
  previous_employement_start_year: "",
  previous_employement_end_year: "",
  previous_employement_end_month: "",
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
          workingEndYear: "",
          currentLocation: "",
          skills: [],
          outsideIndia: false,
          countryOutside: "",
          noticePeriod: "",
          isServingNotice: false,
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
          previousEmployment: [previousCompanySchema],
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
                  // autoFocus
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
                      onClick={(e) => {
                        e.preventDefault();
                        setFieldValue("annualSalaryCurrency", "INR");
                      }}
                      className={`btnic ${
                        values.annualSalaryCurrency === "INR" ? "active" : ""
                      }`}
                    >
                      <i className="fa fa-rupee" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setFieldValue("annualSalaryCurrency", "USD");
                      }}
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
                      <option value="10">1</option>
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
                      <option value="12">1</option>
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
                  <option value="2003">1</option>
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
                  <option value="01">1</option>
                </select>
                <span className="px-3">to</span>
                <select
                  id="workingEndYear"
                  name="workingEndYear"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.workingEndYear}
                  className="selectpicker select-btn rounded-0"
                >
                  <option value="present">Present</option>
                  <option value="1">1</option>
                </select>
                <span>{formikHelper(touched, errors, "workingEndYear")}</span>
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
                  <input
                    checked={values.outsideIndia}
                    onChange={() =>
                      setFieldValue("outsideIndia", !values.outsideIndia)
                    }
                    type="checkbox"
                    className="mt-2"
                  />{" "}
                  Outside India
                </p>
                {values.outsideIndia && (
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
                )}
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
                  <input
                    checked={values.isServingNotice}
                    onChange={() =>
                      setFieldValue("isServingNotice", !values.isServingNotice)
                    }
                    type="checkbox"
                    className="mt-2"
                  />{" "}
                  Serving notice period
                </span>
              </div>
            </div>
            {values.isServingNotice && (
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
                    <option value="2011">2011</option>
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
                    <option value="01">Jan</option>
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
                    <option value={1}>1</option>
                  </select>
                  <span> Date </span>
                </div>
                <div className="col-sm-3">
                  <span className="r-text"> </span>
                </div>
              </div>
            )}
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
                  onClick={(e) => {
                    e.preventDefault();
                    setFieldValue("newSalaryCurrency", "INR");
                  }}
                  className={`btnic ${
                    values.newSalaryCurrency === "INR" ? "active" : ""
                  }`}
                >
                  <i className="fa fa-rupee" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setFieldValue("newSalaryCurrency", "USD");
                  }}
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
                  <option value="1">1</option>
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
                  <option value="2">1</option>
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

            <FieldArray
              name="previousEmployment"
              render={(helper) => (
                <>
                  {values.previousEmployment.map((company, idx) => {
                    return (
                      <React.Fragment key={`prevCom-${idx}`}>
                        <div className="form-group row mb-4">
                          {idx !== 0 && <div className="horizontal-line" />}
                          <div className="col-sm-12 offset-sm-3">
                            <h6>
                              {idx === 0 ? `Previous` : `Other`} Employment
                            </h6>
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
                              id={`previousEmployment.${idx}.previous_employement_designation`}
                              name={`previousEmployment.${idx}.previous_employement_designation`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={
                                values.previousEmployment[idx]
                                  .previous_employement_designation
                              }
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
                            Company{" "}
                          </label>
                          <div className="col-sm-6">
                            <input
                              id={`previousEmployment.${idx}.previous_employement_company`}
                              name={`previousEmployment.${idx}.previous_employement_company`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={
                                values.previousEmployment[idx]
                                  .previous_employement_company
                              }
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
                              id={`previousEmployment.${idx}.previous_employement_start_year`}
                              name={`previousEmployment.${idx}.previous_employement_start_year`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={
                                values.previousEmployment[idx]
                                  .previous_employement_start_year
                              }
                              className="selectpicker select-btn rounded-0"
                            >
                              <option>Year</option>
                              <option value="2011">2011</option>
                            </select>
                            <select
                              id={`previousEmployment.${idx}.previous_employement_start_month`}
                              name={`previousEmployment.${idx}.previous_employement_start_month`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={
                                values.previousEmployment[idx]
                                  .previous_employement_start_month
                              }
                              className="selectpicker select-btn rounded-0"
                            >
                              <option>Month</option>
                              <option value="01">Jan</option>
                            </select>
                            <span className="px-3">to</span>
                            <select
                              id={`previousEmployment.${idx}.previous_employement_end_year`}
                              name={`previousEmployment.${idx}.previous_employement_end_year`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={
                                values.previousEmployment[idx]
                                  .previous_employement_end_year
                              }
                              className="selectpicker select-btn rounded-0"
                            >
                              <option>Year</option>
                              <option value="2011">2011</option>
                            </select>
                            <select
                              id={`previousEmployment.${idx}.previous_employement_end_month`}
                              name={`previousEmployment.${idx}.previous_employement_end_month`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={
                                values.previousEmployment[idx]
                                  .previous_employement_end_month
                              }
                              className="selectpicker select-btn rounded-0"
                            >
                              <option>Month</option>
                              <option value="01">Jan</option>
                            </select>
                          </div>
                          <div className="col-sm-3">
                            <span className="r-text"> </span>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                  <p className="small add-more">
                    <a
                      onClick={() => helper.push(previousCompanySchema)}
                      className="cursor-pointer"
                    >
                      <i className="fa fa-plus" /> Add more Employment
                    </a>
                  </p>
                </>
              )}
            />

            <div className="form-group row">
              <div className="col-sm-12">
                <div className="text-center conti-btn">
                  <input
                    // onClick={(e) => e.preventDefault()}
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
