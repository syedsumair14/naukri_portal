const { validationResult } = require("express-validator");
const mysql = require("../../utils/db/database");

exports.educationUpdateController = async (req, res, next) => {
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
    course_type: req.body.course_type,
    passing_year: req.body.passing_year,
    education_user_id: req.user_id,
  };

  try {
    let educationQuery = `INSERT INTO education_details SET ?`;

    let updateEducationDetails = await mysql.query(
      educationQuery,
      educationDetails
    );

    let moreDetailsArray = [];
    for (let moreDetails of req.body.other_education) {
      moreDetailsArray.push([
        ...Object.values(moreDetails),
        updateEducationDetails[0].insertId,
      ]);
    }

    let insertMoreDetails;
    if (moreDetailsArray.length > 0) {
      let insertMoreEducationDetailsQuery = `INSERT INTO other_education_details 
        (highest_qualification, board, year_of_passing, medium, 
            percentage, education_details_id) VALUES ?`;
      insertMoreDetails = await mysql.query(insertMoreEducationDetailsQuery, [
        moreDetailsArray,
      ]);
    }

    return res.status(201).json({
      message: "Successfully updated",
      insertedId: updateEducationDetails[0].insertId,
      addtionalEducationId: insertMoreDetails[0].insertId,
    });
  } catch (error) {
    next(error);
  }
};
