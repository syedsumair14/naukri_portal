const mysql = require("../../utils/db/database");
const { validationResult } = require("express-validator");

exports.employmentUpdateController = async (req, res, next) => {
  let errors = validationResult(req);
  // console.log(errors);
  if (!errors.isEmpty()) {
    let err = new Error();
    err.errors = errors.array();
    err.status = 400;
    return next(err);
  }

  let details = {
    current_designation: req.body.current_designation,
    current_company: req.body.current_company,
    salary_currency: req.body.salary_currency,
    salary_in_lakhs: req.body.salary_in_lakhs,
    salary_in_thousands: req.body.salary_in_thousands,
    work_start_year: req.body.work_start_year,
    work_start_month: req.body.work_start_month,
    work_end_year: req.body.work_end_year,
    current_location: req.body.current_location,
    currently_outside_india: req.body.currently_outside_india,
    current_country: req.body.current_country,
    notice_period_duration: req.body.notice_period_duration,
    is_serving_notice: req.body.is_serving_notice,
    last_working_day_year: req.body.last_working_day_year,
    last_working_day_month: req.body.last_working_day_month,
    last_working_day_date: req.body.last_working_day_date,
    new_offered_salary_currency: req.body.new_offered_salary_currency,
    new_offered_salary_in_lakhs: req.body.new_offered_salary_in_lakhs,
    new_offered_salary_in_thousands: req.body.new_offered_salary_in_thousands,
    offered_designation: req.body.offered_designation,
    new_company: req.body.new_company,
    industry: req.body.industry,
    functional_area: req.body.functional_area,
    role: req.body.role,
    employment_user_id: req.user_id,
  };

  let { other_employment, skills } = req.body;

  const query = `REPLACE INTO employement_details SET ?`;

  try {
    const updateEmployement = await mysql.query(query, details, details);
    const insertedEmploymentId = updateEmployement[0].insertId;

    const saveSkillsQuery = `INSERT INTO skills 
    (employment_detail_id, skills_user_id, 
      skill_name) VALUES ?`;

    let skillData = [];
    for (let skill of skills) {
      skillData.push([insertedEmploymentId, req.user_id, skill]);
    }

    let saveSkills = await mysql.query(saveSkillsQuery, [skillData]);

    const saveEmploymentHistoryQuery = `INSERT INTO previous_employement_details
    (employement_detail_id,
      previous_employement_designation,
    previous_employement_company,
    previous_employement_start_month,
    previous_employement_start_year,
    previous_employement_end_year,
    previous_employement_end_month) VALUES ?`;

    let data = [];
    for (objects of other_employment) {
      let val = Object.values(objects);
      data.push([insertedEmploymentId, ...val]);
    }

    const saveEmploymentHistory = await mysql.query(
      saveEmploymentHistoryQuery,
      [data]
    );

    return res
      .status(201)
      .json({ message: "succesfully updated", status: 201 });
  } catch (error) {
    let err = new Error();
    err.error = error;
    err.status = 500;
    err.message = error.message;
    return next(err);
  }
};
