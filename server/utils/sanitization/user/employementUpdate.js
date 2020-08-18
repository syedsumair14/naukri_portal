const { body } = require("express-validator");

exports.validateEmployment = [
  body("current_designation").not().isEmpty().withMessage("Select designation"),
  body("current_company").not().isEmpty().withMessage("Select company"),
  body("salary_currency").not().isEmpty().withMessage("Select Currency"),
  body("salary_in_lakhs").not().isEmpty().withMessage("Select Salary in Lakhs"),
  body("salary_in_thousands")
    .not()
    .isEmpty()
    .withMessage("Select Salary in Lakhs"),
  body("work_start_year").not().isEmpty().withMessage("Select Start year"),
  body("work_start_month").not().isEmpty().withMessage("Select Start month"),
  body("work_end_year").not().isEmpty().withMessage("Select End year"),
  body("work_end_month").not().isEmpty().withMessage("Select End month"),
  body("current_location")
    .not()
    .isEmpty()
    .withMessage("Select current location"),
  body("currently_outside_india")
    .not()
    .isEmpty()
    .withMessage("Select if outside"),
  body("current_country").not().isEmpty().withMessage("Select Current country"),
  body("is_serving_notice")
    .not()
    .isEmpty()
    .withMessage("Select if serving notice period"),
];
