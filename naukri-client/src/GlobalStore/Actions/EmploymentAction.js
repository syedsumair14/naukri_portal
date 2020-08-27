import Axios from "axios";
import { BASE_URL } from "../../utils/NetworkLayer";

export const UpdateEmployment = (body) => async (dispatch) => {
  // let body = {
  //   skills: ["js", "react"],
  //   previousEmployment: [
  //     {
  //       previous_employement_designation: "as",
  //       previous_employement_company: "as",
  //       previous_employement_start_month: "12",
  //       previous_employement_start_year: "2011",
  //       previous_employement_end_year: "2012",
  //       previous_employement_end_month: "12",
  //     },
  //   ],
  // };

  let data = {
    current_designation: body.designation,
    current_company: body.currCompany,
    salary_currency: body.annualSalaryCurrency,
    salary_in_lakhs: Number(body.annualSalary),
    salary_in_thousands: Number(body.annualSalaryTh),
    work_start_year: body.workingSinceYear,
    work_start_month: body.workingSinceMonth,
    work_end_year: body.workingEndYear,
    current_location: body.currentLocation,
    currently_outside_india: body.outsideIndia === true ? 1 : 0,
    current_country: body.countryOutside,
    notice_period_duration: body.noticePeriod,
    is_serving_notice: body.isServingNotice === true ? 1 : 0,
    last_working_day_year: body.lastWorkingDayYear,
    last_working_day_month: body.lastWorkingDayMonth,
    last_working_day_date: body.lastWorkingDayDate,
    new_offered_salary_currency: body.newSalaryCurrency,
    new_offered_salary_in_lakhs: body.newSalaryLakhs,
    new_offered_salary_in_thousands: body.newSalarythousand,
    offered_designation: body.offerDesig,
    new_company: body.newCompany,
    industry: body.industry,
    functional_area: body.functionalArea,
    role: body.role,
    other_employment: body.previousEmployment,
    skills: body.skills,
  };
  console.log(data, "employment action pre");

  const updated = await Axios.put(BASE_URL + "user/employmentUpdate", data);
  console.log(updated, "employment action post");
};
