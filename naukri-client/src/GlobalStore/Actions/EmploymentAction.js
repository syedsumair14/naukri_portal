import Axios from "axios";
import { BASE_URL } from "../../utils/NetworkLayer";

export const UpdateEmployment = () => async (dispatch) => {
  let body = {
    skills: ["java", "node"],
    otherEmployement: [
      {
        previous_employement_designation: "dev",
        previous_employement_company: "deeb",
        previous_employement_start_month: 2,
        previous_employement_start_year: 1,
        previous_employement_end_year: 2,
        previous_employement_end_month: 3,
      },
      {
        previous_employement_designation: "dev2",
        previous_employement_company: "deeb2",
        previous_employement_start_month: 2,
        previous_employement_start_year: 1,
        previous_employement_end_year: 2,
        previous_employement_end_month: 3,
      },
    ],
  };
  let data = {
    current_designation: body.designation || 1,
    current_company: body.currCompany || 1,
    salary_currency: body.annualSalaryCurrency || 1,
    salary_in_lakhs: body.annualSalary || 1,
    salary_in_thousands: body.annualSalaryTh || 1,
    work_start_year: body.workingSinceYear || 1,
    work_start_month: body.workingSinceMonth || 1,
    work_end_year: body.workingEndYear || 1,
    current_location: body.currentLocation || 1,
    currently_outside_india: body.outsideIndia || 1,
    current_country: body.countryOutside || 1,
    notice_period_duration: body.noticePeriod || 1,
    is_serving_notice: body.isServingNotice || 1,
    last_working_day_year: body.lastWorkingDayYear || 1,
    last_working_day_month: body.lastWorkingDayMonth || 1,
    last_working_day_date: body.lastWorkingDayDate || 1,
    new_offered_salary_currency: body.newSalaryCurrency || 1,
    new_offered_salary_in_lakhs: body.newSalaryLakhs || 1,
    new_offered_salary_in_thousands: body.newSalarythousand || 1,
    offered_designation: body.offerDesig || 1,
    new_company: body.newCompany || 1,
    industry: body.industry || 1,
    functional_area: body.functionalArea || 1,
    role: body.role || 1,
    other_employment: body.otherEmployement,
    skills: body.skills,
  };
  console.log(data, "employment action pre");

  const updated = await Axios.put(BASE_URL + "user/employmentUpdate", data);
  console.log(updated, "employment action post");
};
