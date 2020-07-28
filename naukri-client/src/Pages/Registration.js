import React from "react";
import PersonalComponent from "../Components/Registration/Personal/Personal";
import EmploymentComponent from "../Components/Registration/Employment/Employment";
import EducationComponent from "../Components/Registration/Education/Education";

export default function Registration() {
  return (
    <>
      <section className="" id="tabs">
        <div className="container-fluid p-0">
          <nav className="">
            {" "}
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link active"
                id="nav-Personal-tab"
                data-toggle="tab"
                href="#nav-personal"
                role="tab"
                aria-controls="nav-personal"
                aria-selected="true"
              >
                Personal
              </a>
              <a
                className="nav-item nav-link"
                id="nav-employment-tab"
                data-toggle="tab"
                href="#nav-employment"
                role="tab"
                aria-controls="nav-employment"
                aria-selected="false"
              >
                Employment
              </a>
              <a
                className="nav-item nav-link"
                id="nav-education-tab"
                data-toggle="tab"
                href="#nav-education"
                role="tab"
                aria-controls="nav-education"
                aria-selected="false"
              >
                Education
              </a>
            </div>
          </nav>
          <div className="wrapper-bg">
            <div className="tab-content py-4 px-3 px-sm-0" id="nav-tabContent">
              <PersonalComponent />
              <EmploymentComponent />
              <EducationComponent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
