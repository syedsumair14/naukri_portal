const { validationResult } = require("express-validator");

exports.educationUpdateController = (req, res, next) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    let errorObj = new Error();
    errorObj.errors = errors.array();
    errorObj.status = 422;
    next(errorObj);
  }

  let educationDetails = {
    highest_qualification: req.body.highest_qualification,
    course: req.body.course,
    board: req.body.board,
    year_of_passing: req.body.year_of_passing,
    medium: req.body.medium,
    percentage: req.body.percentage,
    specialization: req.body.specialization,
    university_college: req.body.university_college,
    coourse_type: req.body.coourse_type,
    passing_year: req.body.passing_year,
    education_user_id: req.body.education_user_id,
  };

  try {
    let educationQuery = `INSERT INTO education_details 
      (highest_qualification, course, board, year_of_passing, medium, percentage, specialization,
        university_college, coourse_type, passing_year, education_user_id) VALUES ?`;
  } catch (error) {
    console.log(error.message);
  }
};
