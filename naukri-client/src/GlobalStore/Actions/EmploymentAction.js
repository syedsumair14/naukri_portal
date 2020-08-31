import Axios from "axios";
import { BASE_URL } from "../../utils/NetworkLayer";
import { DISPACTH_TOAST, EMPLOYMENT_UPDATE } from "./ActionList";

export const UpdateEmployment = (body) => async (dispatch) => {
  try {
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
      last_working_day_year: body.lastWorkingDayYear || null,
      last_working_day_month: body.lastWorkingDayMonth || null,
      last_working_day_date: body.lastWorkingDayDate || null,
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
    const updated = await Axios.put(BASE_URL + "user/employmentUpdate", data);
    console.log(updated, "employment action post");
    if (updated.data.status === 400) {
      return dispatch({
        type: DISPACTH_TOAST,
        payload: {
          appearance: "error",
          message: updated.data.message || "Validation error",
          notification: true,
        },
      });
    }

    if (updated.data.status === 201 || updated.data.status === 200) {
      dispatch({
        type: DISPACTH_TOAST,
        payload: {
          appearance: "success",
          message: updated.data.message || "Updated",
          notification: true,
        },
      });
      return dispatch({
        type: EMPLOYMENT_UPDATE,
        payload: true,
      });
    }

    if (updated.data.status === 500) {
      let err = new Error();
      err.message = updated.data.message;
      err.status = 500;
      throw err;
    }
  } catch (error) {
    dispatch({
      type: DISPACTH_TOAST,
      payload: {
        appearance: "error",
        message: error.message || "Something went wrong",
        notification: true,
      },
    });
  }
};
