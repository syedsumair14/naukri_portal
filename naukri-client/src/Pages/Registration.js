import React, { useState } from "react";
import PersonalComponent from "../Components/Registration/Personal/Personal";
import EmploymentComponent from "../Components/Registration/Employment/Employment";
import EducationComponent from "../Components/Registration/Education/Education";

export default function Registration() {
  const [activeTab, setActiveTab] = useState("personal");

  function showTabPages() {
    switch (activeTab) {
      case "personal":
        return <PersonalComponent />;
      case "employment":
        return <EmploymentComponent />;
      case "education":
        return <EducationComponent />;
      default:
        break;
    }
  }

  return (
    <>
      <section className="" id="tabs">
        <div className="container-fluid p-0">
          <nav className="">
            {" "}
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className={`nav-item nav-link cursor-pointer ${
                  activeTab === "personal" ? "active" : ""
                }`}
                onClick={() => setActiveTab("personal")}
                id="nav-Personal-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="nav-personal"
                aria-selected="true"
              >
                Personal
              </a>
              <a
                className={`nav-item nav-link cursor-pointer ${
                  activeTab === "employment" ? "active" : ""
                }`}
                onClick={() => setActiveTab("employment")}
                id="nav-employment-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="nav-employment"
                aria-selected="false"
              >
                Employment
              </a>
              <a
                className={`nav-item nav-link cursor-pointer ${
                  activeTab === "education" ? "active" : ""
                }`}
                onClick={() => setActiveTab("education")}
                id="nav-education-tab"
                data-toggle="tab"
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
              {showTabPages()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
