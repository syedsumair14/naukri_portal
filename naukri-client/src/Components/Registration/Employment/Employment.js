import React from "react";
import "./Employment.css";

export default function EmploymentComponent() {
  return (
    <div
      // className="tab-pane fade text-dark"
      id="nav-employment"
      role="tabpanel"
      aria-labelledby="nav-employment-tab"
    >
      <form className="form-horizontal mt-3 empmnt-section" role="form">
        <div className="form-group row mb-4">
          <label htmlFor="Name" className="col-sm-3 col-form-label text-right">
            {" "}
            Current Designation
          </label>
          <div className="col-sm-6">
            <select
              className="selectpicker form-control rounded-0"
              data-size={5}
            >
              <option value={1}>IT Manager</option>
              <option value={2}>UI Developer</option>
              <option value={3}>PHP Developer</option>
              <option value={4}>Phythan Developer</option>
              <option value={5}>Angular Developer</option>
              <option value={6}>Web Designer</option>
            </select>
          </div>
          <div className="col-sm-3">
            <span className="r-text"> Job Title/Role </span>
          </div>
        </div>
        <div className="form-group row mb-4">
          <label htmlFor="Name" className="col-sm-3 col-form-label text-right">
            {" "}
            Current Company
          </label>
          <div className="col-sm-6">
            <select
              className="selectpicker form-control rounded-0"
              data-size={5}
              autoFocus
            >
              <option value={1}>Tata Consultancy</option>
              <option value={2}>Infosys</option>
              <option value={3}>HCL</option>
              <option value={4}>Wipro</option>
            </select>
          </div>
          <div className="col-sm-3">
            <span className="r-text">
              {" "}
              Name of the Company/Organization. Where you are currently working.
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
                <button className="btnic active">
                  <i className="fa fa-rupee" />
                </button>
                <button className="btnic">
                  <i className="fa fa-dollar" />
                </button>
                <select className="selectpicker select-btn rounded-0">
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
              </div>
              <div className="col-sm-6 col-md-6 col-xs-6">
                <select className="selectpicker select-btn rounded-0">
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
            <select className="selectpicker select-btn rounded-0">
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
            <select className="selectpicker select-btn rounded-0">
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
          </div>
          <div className="col-sm-3">
            <span className="r-text"></span>
          </div>
        </div>
        <div className="form-group row mb-4">
          <label htmlFor="Name" className="col-sm-3 col-form-label text-right">
            {" "}
            Current Location
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              placeholder="Tell us about your current location"
              className="form-control rounded-0"
            />
            <p className="small">
              <input type="checkbox" className="mt-2" /> Outside India
            </p>
            <select
              className="mdb-select md-form form-control rounded-0"
              searchable="Search here.."
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
              className="selectpicker form-control rounded-0"
              data-size={9}
            >
              <option value={1}>Select duration of your notice period</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
            <span className="small">
              <input type="checkbox" className="mt-2" /> Serving notice period
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
            <select className="selectpicker select-btn rounded-0">
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
            <select className="selectpicker select-btn rounded-0">
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
            <select className="selectpicker select-btn rounded-0">
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
            <button className="btnic active">
              <i className="fa fa-rupee" />
            </button>
            <button className="btnic">
              <i className="fa fa-dollar" />
            </button>
            <select className="selectpicker select-btn rounded-0">
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
            <select className="selectpicker select-btn rounded-0">
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
          <label htmlFor="Name" className="col-sm-3 col-form-label text-right">
            {" "}
            Skills
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              placeholder="Enter your areas of expertise/specialization"
              className="form-control rounded-0"
            />
          </div>
          <div className="col-sm-3">
            <span className="r-text">Enter your desired role or skills </span>
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
            <select className="mdb-select md-form form-control rounded-0">
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
              className="selectpicker form-control rounded-0"
              data-size={9}
              value={1}
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
            <select className="selectpicker select-btn rounded-0">
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
            <select className="selectpicker select-btn rounded-0">
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
            <select className="selectpicker select-btn rounded-0">
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
            <select className="selectpicker select-btn rounded-0">
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
            <select className="selectpicker select-btn rounded-0">
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
            <select className="selectpicker select-btn rounded-0">
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
            <select className="selectpicker select-btn rounded-0">
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
            <select className="selectpicker select-btn rounded-0">
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
            <select className="selectpicker select-btn rounded-0">
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
            <select className="selectpicker select-btn rounded-0">
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
            <select className="selectpicker select-btn rounded-0">
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
            <select className="selectpicker select-btn rounded-0">
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
        <div className="form-group row">
          <div className="col-sm-12">
            <div className="text-center conti-btn">
              <button type="submit" className="submit-btn mt-3">
                Continue
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
