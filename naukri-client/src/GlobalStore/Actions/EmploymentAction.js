import Axios from "axios";
import { BASE_URL } from "../../utils/NetworkLayer";

export const UpdateEmployment = (body) => async (dispatch) => {
  console.log(body, "employment action pre");
  let data = {
    current_designation: body.designation,
    current_company: body.currCompany,
    salary_currency: body.annualSalary,
    salary_in_lakhs: body.annualSalaryTh,
    work_start_year: body.workingSinceYear,
    work_start_month: body.workingSinceMonth,
    current_location: body.currentLocation,
    "": body.skills,
    currently_outside_india: body.countryOutside,
    is_serving_notice: body.noticePeriod,
    last_working_day_year: body.lastWorkingDayYear,
    last_working_day_month: body.lastWorkingDayMonth,
    last_working_day_date: body.lastWorkingDayDate,
    new_offered_salary_in_lakhs: body.newSalaryLakhs,
    new_offered_salary_in_thousands: body.newSalarythousand,
    offered_designation: body.offerDesig,
    new_company: body.newCompany,
    industry: body.industry,
    functional_area: body.functionalArea,
    role: body.role,
    "": body.prevDesignation,
    "": body.prevCompany,
    "": body.prevDurationMonth,
    "": body.prevDurationYear,
    "": body.prevDurationYearTo,
    "": body.prevDurationMonthTo,
    [1]: body.otherEmployement,
  };
  const updated = await Axios.put(BASE_URL + "user/employmentUpdate", body);
  console.log(updated, "employment action post");
};
