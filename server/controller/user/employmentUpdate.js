const mysql = require("../../utils/db/database");
const { validationResult } = require("express-validator");

exports.employmentUpdateController = (req, res, next) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    let err = new Error();
    err.errors = errors;
    err.status = 400;
    return next(err);
  }

  console.log(req.body);

  let {
    current_designation,
    current_company,
    salary_currency,
    salary_in_lakhs,
    salary_in_thousands,
    work_start_year,
    work_start_month,
    work_end_year,
    work_end_month,
    current_location,
    currently_outside_india,
    current_country,
    is_serving_notice,
  } = req.body;
};
