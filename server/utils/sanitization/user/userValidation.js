const { body } = require("express-validator");

let registerationValidation = [];
let registrationFields = [
  "user_role_id",
  "name",
  "email_id",
  "password",
  "mobile_no",
  "work_exp_years",
  "work_exp_month",
  //   "resume",
];

registrationFields.forEach((field) =>
  registerationValidation.push(body(field).not().isEmpty())
);

module.exports = registerationValidation;
