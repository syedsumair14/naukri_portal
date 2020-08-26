const mysql = require("../../utils/db/database");
const { validationResult } = require("express-validator");

exports.employmentUpdateController = async (req, res, next) => {
  let errors = validationResult(req);
  // console.log(errors);
  if (!errors.isEmpty()) {
    let err = new Error();
    err.errors = errors;
    err.status = 400;
    return next(err);
  }

  // console.log(req.body);

  let {
    current_designation,
    current_company,
    salary_currency,
    salary_in_lakhs,
    salary_in_thousands,
    work_start_year,
    work_start_month,
    work_end_year,
    current_location,
    currently_outside_india,
    current_country,
    notice_period_duration,
    is_serving_notice,
    last_working_day_year,
    last_working_day_month,
    last_working_day_date,
    new_offered_salary_currency,
    new_offered_salary_in_lakhs,
    new_offered_salary_in_thousands,
    offered_designation,
    new_company,
    industry,
    functional_area,
    role,
    employment_user_id = req.user_id,
    other_employment,
    skills,
  } = req.body;

  const query = `INSERT INTO employement_details (
    current_designation,
    current_company,
    salary_currency,
    salary_in_lakhs,
    salary_in_thousands,
    work_start_year,
    work_start_month,
    work_end_year,
    current_location,
    currently_outside_india,
    current_country,
    notice_period_duration,
    is_serving_notice,
    last_working_day_year,
    last_working_day_month,
    last_working_day_date,
    new_offered_salary_currency,
    new_offered_salary_in_lakhs,
    new_offered_salary_in_thousands,
    offered_designation,
    new_company,
    industry,
    functional_area,
    role,
    employment_user_id
    ) VALUES 
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  try {
    const updateEmployement = await mysql.execute(query, [
      current_designation,
      current_company,
      salary_currency,
      salary_in_lakhs,
      salary_in_thousands,
      work_start_year,
      work_start_month,
      work_end_year,
      current_location,
      currently_outside_india,
      current_country,
      notice_period_duration,
      is_serving_notice,
      last_working_day_year,
      last_working_day_month,
      last_working_day_date,
      new_offered_salary_currency,
      new_offered_salary_in_lakhs,
      new_offered_salary_in_thousands,
      offered_designation,
      new_company,
      industry,
      functional_area,
      role,
      employment_user_id,
    ]);
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

    return res.status(201).json({ message: "succesfully updated" });
  } catch (error) {
    let err = new Error();
    err.error = error;
    err.status = 500;
    err.message = error.message;
    return next(err);
  }
};
