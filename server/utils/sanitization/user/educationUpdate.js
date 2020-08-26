const { body } = require("express-validator");

exports.validateEducation = [
  body("highest_qualification")
    .not()
    .isEmpty()
    .withMessage("Enter Highest qualification"),
  // body('course').not().isEmpty().withMessage('Enter Course'),
  // body('board').not().isEmpty().withMessage('Enter board'),
  body("year_of_passing").not().isEmpty().withMessage("Enter year of passing"),
  body("passing_year").not().isEmpty().withMessage("Enter passing year"),
];
