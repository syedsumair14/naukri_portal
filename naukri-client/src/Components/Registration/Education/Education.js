import React from "react";
import "./Education.css";

import { useFormik, Formik, FieldArray } from "formik";
import formikHelper from "../ValidationHelper/FormikHelper";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { educationUpdateAction } from "../../../GlobalStore/Actions/EducationAction";

const validationSchema = Yup.object({
  highestQualification: Yup.string().required("Choose qualifications"),
  board: Yup.string().required("Choose board"),
  passingYear: Yup.string().required("Enter year of passing"),
  medium: Yup.string().required("Choose language medium"),
  percentage: Yup.string().required("percentage"),
  course: Yup.string().required("Choose course"),
  specialization: Yup.string().required("Choose your specialization"),
  uniCol: Yup.string().required("Choose your university/college"),
  courseType: Yup.string().required("Choose course type"),
  uniPassingYear: Yup.string().required("Enter year of passing"),
});

const otherEducationSchema = {
  highest_qualification: null,
  board: null,
  year_of_passing: null,
  medium: null,
  percentage: null,
};

export default function EducationComponent() {
  const dispatch = useDispatch();
  return (
    <div
      // className="tab-pane fade text-dark"
      id="nav-education"
      role="tabpanel"
      aria-labelledby="nav-education-tab"
    >
      <Formik
        initialValues={{
          highestQualification: "",
          board: "",
          passingYear: "",
          medium: "",
          percentage: "",
          course: "",
          specialization: "",
          uniCol: "",
          courseType: "",
          uniPassingYear: "",
          otherEducation: [otherEducationSchema],
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values, "submit values");
          dispatch(educationUpdateAction(values));
        }}
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
                Highest Qualification
              </label>
              <div className="col-sm-6">
                <select
                  className="mdb-select md-form form-control rounded-0"
                  searchable="Search here.."
                  id="highestQualification"
                  name="highestQualification"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.highestQualification}
                >
                  <option value disabled>
                    Select your highest qualification
                  </option>
                  <option value={1}>Doctorate/PhD</option>
                  <option value={2}>Masters/Post-Graduation</option>
                  <option value={3}>Graduation/Diploma</option>
                  <option value={4}>10th</option>
                  <option value={5}>12th</option>
                </select>
                {formikHelper(touched, errors, "highestQualification")}
              </div>
              <div className="col-sm-3">
                <span className="r-text">
                  {" "}
                  Select the highest level of the education.
                </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right"
              >
                {" "}
                Board
              </label>
              <div className="col-sm-6">
                <select
                  className="mdb-select md-form form-control rounded-0"
                  searchable="Search here.."
                  id="board"
                  name="board"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                >
                  <option value disabled>
                    Please select board
                  </option>
                  <option value={1}>CBSE</option>
                  <option value={2}>CISCE</option>
                  <option value={3}>Diploma</option>
                  <option value={4}>National Open School</option>
                  <option value={5}>B.Tech</option>
                </select>
                {formikHelper(touched, errors, "board")}
              </div>
              <div className="col-sm-3">
                <span className="r-text">
                  {" "}
                  Recruiters want to know about your education.
                </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right"
              >
                Year of Passing{" "}
              </label>
              <div className="col-sm-6">
                {formikHelper(touched, errors, "passingYear")}
                <select
                  className="mdb-select md-form form-control rounded-0"
                  searchable="Search here.."
                  id="passingYear"
                  name="passingYear"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                >
                  <option value>Please select your completion</option>
                  <option value="2019">2019</option>
                </select>
              </div>
              <div className="col-sm-3">
                <span className="r-text"> </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right "
              >
                Medium{" "}
              </label>
              <div className="col-sm-6">
                <select
                  id="medium"
                  name="medium"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="mdb-select md-form form-control rounded-0"
                >
                  <option value>Please select language medium</option>
                  <option value="1">Hindi</option>
                </select>
                {formikHelper(touched, errors, "medium")}
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
                Percentage{" "}
              </label>
              <div className="col-sm-6">
                <select
                  id="percentage"
                  name="percentage"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="mdb-select md-form form-control rounded-0"
                >
                  <option value disabled>
                    Please select percentage
                  </option>
                  <option value="30.00"> &lt; 40% </option>
                  <option value="40.05">40-44.9%</option>
                </select>
                {formikHelper(touched, errors, "percentage")}
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
                Course
              </label>
              <div className="col-sm-6">
                <select
                  id="course"
                  name="course"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="mdb-select md-form form-control rounded-0"
                  searchable="Search here.."
                >
                  <option value disabled>
                    Select your course
                  </option>
                  <option value={1}>B.A</option>
                  <option value={2}>B.Com</option>
                  <option value={3}>B.Pharma</option>
                  <option value={4}>BAMS</option>
                  <option value={5}>B.Tech</option>
                </select>
                {formikHelper(touched, errors, "course")}
              </div>
              <div className="col-sm-3">
                <span className="r-text">
                  {" "}
                  Recruiters want to know about your education.
                </span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right"
              >
                {" "}
                Specialization
              </label>
              <div className="col-sm-6">
                <select
                  id="specialization"
                  name="specialization"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="mdb-select md-form form-control rounded-0"
                >
                  <option value disabled>
                    Select Specialization{" "}
                  </option>
                  <option value={1}>Sales Manager </option>
                  <option value={2}>Fronted Developer </option>
                  <option value={3}>Product Manager</option>
                </select>
                {formikHelper(touched, errors, "specialization")}
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
                University/College
              </label>
              <div className="col-sm-6">
                <select
                  id="uniCol"
                  name="uniCol"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="mdb-select md-form form-control rounded-0"
                >
                  <option value disabled>
                    Institute Name{" "}
                  </option>
                  <option value={1}>Delhi University </option>
                  <option value={2}>Chacha Nehru Bal Chikitsalaya </option>
                  <option value={3}>Deen Dayal Upadhyaya College</option>
                  <option value={3}>Hans Raj College</option>
                  <option value={3}>Jesus &amp; Mary College</option>
                </select>
                {formikHelper(touched, errors, "uniCol")}
              </div>
              <div className="col-sm-3">
                <span className="r-text"> Tell us about your institute.</span>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="Name"
                className="col-sm-3 col-form-label text-right"
              >
                {" "}
                Course Type
              </label>
              <div className="col-sm-6">
                <div className="btngroup">
                  <button
                    name="courseType"
                    onClick={() => setFieldValue("courseType", "ft")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="button"
                    className={`button crs-btn ${
                      values.courseType === "ft" ? "active" : ""
                    }`}
                  >
                    {" "}
                    Full Time{" "}
                  </button>
                  <button
                    name="courseType"
                    onClick={() => setFieldValue("courseType", "pt")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="button"
                    className={`button crs-btn ${
                      values.courseType === "pt" ? "active" : ""
                    }`}
                  >
                    {" "}
                    Part Time{" "}
                  </button>
                  <button
                    name="courseType"
                    onClick={() => setFieldValue("courseType", "cr")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="button"
                    className={`button crs-btn ${
                      values.courseType === "cr" ? "active" : ""
                    }`}
                  >
                    {" "}
                    Correspondence{" "}
                  </button>
                </div>
              </div>
              <div className="col-sm-6"></div>
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
                Passing Year
              </label>
              <div className="col-sm-6">
                <select
                  id="uniPassingYear"
                  name="uniPassingYear"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="mdb-select md-form form-control rounded-0"
                >
                  <option>Select</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2010</option>
                  <option>2009</option>
                </select>
                {formikHelper(touched, errors, "uniPassingYear")}
                <div className="horizontal-line" />
              </div>
            </div>
            <FieldArray
              name="otherEducation"
              render={(helper) => (
                <>
                  {values.otherEducation.map((education, idx) => (
                    <React.Fragment key={`educat${idx}`}>
                      <div className="form-group row mb-4">
                        <div className="col-sm-12 offset-sm-3 mt-1">
                          <h6>Other Education</h6>
                        </div>
                        <label
                          htmlFor="Name"
                          className="col-sm-3 col-form-label text-right nostar"
                        >
                          {" "}
                          Qualification{" "}
                        </label>
                        <div className="col-sm-6">
                          <select
                            id={`otherEducation.${idx}.highest_qualification`}
                            name={`otherEducation.${idx}.highest_qualification`}
                            className="mdb-select md-form form-control rounded-0"
                            searchable="Search here.."
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={
                              values.otherEducation[idx].highest_qualification
                            }
                          >
                            <option value>Select your qualification</option>
                            <option value={98}>Doctorate/PhD</option>
                            <option value={99}>Masters/Post-Graduation</option>
                            <option value={3}>Graduation/Diploma</option>
                            <option value={4}>10th</option>
                            <option value={5}>12th</option>
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
                          Board{" "}
                        </label>
                        <div className="col-sm-6">
                          <select
                            id={`otherEducation.${idx}.board`}
                            name={`otherEducation.${idx}.board`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.otherEducation[idx].board}
                            className="mdb-select md-form form-control rounded-0"
                            searchable="Search here.."
                          >
                            <option value>Please select board</option>
                            <option value={1}>Andra Pradesh</option>
                            <option value={2}>Assam</option>
                            <option value={3}>Bihar</option>
                            <option value={4}>Goa</option>
                            <option value={5}>Gujrat</option>
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
                          Year of Passing{" "}
                        </label>
                        <div className="col-sm-6">
                          <select
                            id={`otherEducation.${idx}.year_of_passing`}
                            name={`otherEducation.${idx}.year_of_passing`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.otherEducation[idx].year_of_passing}
                            className="mdb-select md-form form-control rounded-0"
                            searchable="Search here.."
                          >
                            <option value>Please select your completion</option>
                            <option value="2019">2019</option>
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
                          Medium{" "}
                        </label>
                        <div className="col-sm-6">
                          <select
                            id={`otherEducation.${idx}.medium`}
                            name={`otherEducation.${idx}.medium`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.otherEducation[idx].medium}
                            className="mdb-select md-form form-control rounded-0"
                          >
                            <option value>Please select language medium</option>
                            <option value="hindi">Hindi</option>
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
                          Percentage{" "}
                        </label>
                        <div className="col-sm-6">
                          <select
                            id={`otherEducation.${idx}.percentage`}
                            name={`otherEducation.${idx}.percentage`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.otherEducation[idx].percentage}
                            className="mdb-select md-form form-control rounded-0"
                          >
                            <option>Please select percentage</option>
                            <option value={40.4}> &lt; 40% </option>
                          </select>
                        </div>
                        <div className="col-sm-3">
                          <span className="r-text"> </span>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  <p className="small add-more">
                    <a
                      onClick={() => helper.push(otherEducationSchema)}
                      className="cursor-pointer"
                    >
                      <i className="fa fa-plus" /> Add more education
                    </a>
                  </p>
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
