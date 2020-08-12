import React from "react";
import "./AdditionalDetails.css";

export default function AdditonalDetails() {
  return (
    <section id="tabs">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <nav className>
              <div
                className="nav nav-tabs nav-fill"
                id="nav-tab"
                role="tablist"
              >
                <p className="text-white">All fields are optinal</p>
                <p className="text-white">
                  Provide additional details to complete your profile
                </p>
              </div>
            </nav>
            <div className="wrapper-bg mt-5">
              <div className="form-group row mb-4">
                <label
                  htmlFor="Name"
                  className="col-sm-3 col-form-label text-center nostar"
                >
                  {" "}
                  Describe your professional background in one line
                </label>
                <div className="col-sm-6">
                  <textarea
                    className="form-control text-left rounded-0"
                    id="exampleFormControlTextarea1"
                    rows={2}
                    defaultValue={
                      "Electronics/TeleOperation and Maintenance engineer in Tata Communications in Noida/NCR knowledge of router and switch configuration/various switching communication currently\n\t\t\t\t\t\t\t  "
                    }
                  />
                  <small>
                    Example-MBA in Marketing with 8 yrs of experience in account
                    management, business development in Many industry.{" "}
                  </small>
                  <div className="horizontal-line mt-4" />
                </div>
                <div className="col-sm-3">
                  <span className="r-text">
                    {" "}
                    We have autofilled your Resume Headline based on details you
                    have filled. You can edit it.{" "}
                  </span>
                </div>
              </div>
              <div className="form-group row mb-4">
                <label
                  htmlFor="Name"
                  className="col-sm-3 col-form-label text-right nostar nostar"
                >
                  Preferred Work Location{" "}
                </label>
                <div className="col-sm-6">
                  <select
                    className="mdb-select md-form form-control rounded-0"
                    searchable="Search here.."
                  >
                    <option value disabled selected>
                      Select up to 3 locations
                    </option>
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
                  {" "}
                  Desired Job Type
                </label>
                <div className="col-sm-6">
                  <div className="btngroup">
                    <button type="button" className="button disr-btn active">
                      {" "}
                      Permanent
                    </button>
                    <button type="button" className="button disr-btn">
                      {" "}
                      Temporary/contract{" "}
                    </button>
                    <button type="button" className="button disr-btn">
                      {" "}
                      Both{" "}
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
                  className="col-sm-3 col-form-label text-right nostar"
                >
                  {" "}
                  Desired Employment Type
                </label>
                <div className="col-sm-6">
                  <div className="btngroup">
                    <button type="button" className="button disr-btn active">
                      {" "}
                      Full Time
                    </button>
                    <button type="button" className="button disr-btn">
                      {" "}
                      Part Time{" "}
                    </button>
                    <button type="button" className="button disr-btn">
                      {" "}
                      Both{" "}
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
                  className="col-sm-3 col-form-label text-right nostar"
                >
                  IT Skills{" "}
                </label>
                <div className="col-sm-6 ">
                  <div className="row">
                    <div className="col-sm-12">
                      <p>
                        Mention all the important programming languages and
                        softwares <br /> Example: MS Word, Excel etc.
                      </p>
                      <div className="skill-field">
                        <label>Skills</label>
                        <input
                          type="text"
                          className="input-text form-control rounded-0"
                        />{" "}
                      </div>
                      <div className="skill-field">
                        <label>Version</label>
                        <input
                          type="text"
                          className="input-text form-control rounded-0"
                        />{" "}
                      </div>
                      <div className="skill-field">
                        <label>Last Used</label>
                        <select
                          className="mdb-select md-form form-control rounded-0"
                          searchable="Search here.."
                        >
                          <option value disabled selected>
                            Year
                          </option>
                          <option value={1}>2020</option>
                          <option value={2}>2019</option>
                          <option value={3}>2018</option>
                          <option value={4}>2017</option>
                          <option value={5}>2016</option>
                        </select>{" "}
                      </div>
                      <div className="skill-field">
                        <label>Experience</label>
                        <select
                          className="mdb-select md-form form-control rounded-0"
                          searchable="Search here.."
                        >
                          <option value={1}>0</option>
                          <option value={2}>1</option>
                          <option value={3}>2</option>
                          <option value={4}>3</option>
                          <option value={5}>4</option>
                          <option value={5}>5</option>
                          <option value={5}>6</option>
                          <option value={5}>7</option>
                          <option value={5}>8</option>
                          <option value={5}>9</option>
                          <option value={5}>10</option>
                          <option value={5}>11</option>
                          <option value={5}>12</option>
                        </select>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 mt-2">
                      <div className="skill-field">
                        <input
                          type="text"
                          className="input-text form-control rounded-0"
                        />{" "}
                      </div>
                      <div className="skill-field">
                        <input
                          type="text"
                          className="input-text form-control rounded-0"
                        />{" "}
                      </div>
                      <div className="skill-field">
                        <select
                          className="mdb-select md-form form-control rounded-0"
                          searchable="Search here.."
                        >
                          <option value disabled selected>
                            Year
                          </option>
                          <option value={1}>2020</option>
                          <option value={2}>2019</option>
                          <option value={3}>2018</option>
                          <option value={4}>2017</option>
                          <option value={5}>2016</option>
                        </select>
                      </div>
                      <div className="skill-field">
                        <select
                          className="mdb-select md-form form-control rounded-0"
                          searchable="Search here.."
                        >
                          <option value={1}>0</option>
                          <option value={2}>1</option>
                          <option value={3}>2</option>
                          <option value={4}>3</option>
                          <option value={5}>4</option>
                          <option value={5}>5</option>
                          <option value={5}>6</option>
                          <option value={5}>7</option>
                          <option value={5}>8</option>
                          <option value={5}>9</option>
                          <option value={5}>10</option>
                          <option value={5}>11</option>
                          <option value={5}>12</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 mt-2">
                      <div className="skill-field">
                        <input
                          type="text"
                          className="input-text form-control rounded-0"
                        />{" "}
                      </div>
                      <div className="skill-field">
                        <input
                          type="text"
                          className="input-text form-control rounded-0"
                        />{" "}
                      </div>
                      <div className="skill-field">
                        <select
                          className="mdb-select md-form form-control rounded-0"
                          searchable="Search here.."
                        >
                          <option value disabled selected>
                            Year
                          </option>
                          <option value={1}>2020</option>
                          <option value={2}>2019</option>
                          <option value={3}>2018</option>
                          <option value={4}>2017</option>
                          <option value={5}>2016</option>
                        </select>
                      </div>
                      <div className="skill-field">
                        <select
                          className="mdb-select md-form form-control rounded-0"
                          searchable="Search here.."
                        >
                          <option value={1}>0</option>
                          <option value={2}>1</option>
                          <option value={3}>2</option>
                          <option value={4}>3</option>
                          <option value={5}>4</option>
                          <option value={5}>5</option>
                          <option value={5}>6</option>
                          <option value={5}>7</option>
                          <option value={5}>8</option>
                          <option value={5}>9</option>
                          <option value={5}>10</option>
                          <option value={5}>11</option>
                          <option value={5}>12</option>
                        </select>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 mt-2">
                      <div className="skill-field">
                        <input
                          type="text"
                          className="input-text form-control rounded-0"
                        />{" "}
                      </div>
                      <div className="skill-field">
                        <input
                          type="text"
                          className="input-text form-control rounded-0"
                        />{" "}
                      </div>
                      <div className="skill-field">
                        <select
                          className="mdb-select md-form form-control rounded-0"
                          searchable="Search here.."
                        >
                          <option value disabled selected>
                            {" "}
                            Year{" "}
                          </option>
                          <option value={1}>2020</option>
                          <option value={2}>2019</option>
                          <option value={3}>2018</option>
                          <option value={4}>2017</option>
                          <option value={5}>2016</option>
                        </select>
                      </div>
                      <div className="skill-field">
                        <select
                          className="mdb-select md-form form-control rounded-0"
                          searchable="Search here.."
                        >
                          <option value={1}>0</option>
                          <option value={2}>1</option>
                          <option value={3}>2</option>
                          <option value={4}>3</option>
                          <option value={5}>4</option>
                          <option value={5}>5</option>
                          <option value={5}>6</option>
                          <option value={5}>7</option>
                          <option value={5}>8</option>
                          <option value={5}>9</option>
                          <option value={5}>10</option>
                          <option value={5}>11</option>
                          <option value={5}>12</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 mt-2">
                      <div className="skill-field">
                        <input
                          type="text"
                          className="input-text form-control rounded-0"
                        />
                      </div>
                      <div className="skill-field">
                        <input
                          type="text"
                          className="input-text form-control rounded-0"
                        />
                      </div>
                      <div className="skill-field">
                        <select
                          className="mdb-select md-form form-control rounded-0"
                          searchable="Search here.."
                        >
                          <option value disabled selected>
                            {" "}
                            Year{" "}
                          </option>
                          <option value={1}>2020</option>
                          <option value={2}>2019</option>
                          <option value={3}>2018</option>
                          <option value={4}>2017</option>
                          <option value={5}>2016</option>
                        </select>
                      </div>
                      <div className="skill-field">
                        <select
                          className="mdb-select md-form form-control rounded-0"
                          searchable="Search here.."
                        >
                          <option value={1}>0</option>
                          <option value={2}>1</option>
                          <option value={3}>2</option>
                          <option value={4}>3</option>
                          <option value={5}>4</option>
                          <option value={5}>5</option>
                          <option value={5}>6</option>
                          <option value={5}>7</option>
                          <option value={5}>8</option>
                          <option value={5}>9</option>
                          <option value={5}>10</option>
                          <option value={5}>11</option>
                          <option value={5}>12</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <p className="small add-more">
                    <a href="#">
                      <i className="fa fa-plus" /> add more skills{" "}
                    </a>
                  </p>
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
                  Gender{" "}
                </label>
                <div className="col-sm-6">
                  <div className="btngroup">
                    <button type="button" className="button disr-btn active">
                      {" "}
                      Male{" "}
                    </button>
                    <button type="button" className="button disr-btn">
                      {" "}
                      Female{" "}
                    </button>
                    <button type="button" className="button disr-btn">
                      {" "}
                      Transgender{" "}
                    </button>
                  </div>
                </div>
                <div className="col-sm-3">
                  <span className="r-text"> </span>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-12">
                  <div className="text-center conti-btn">
                    <button type="submit" className="submit-btn mt-3">
                      {" "}
                      Submit{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
