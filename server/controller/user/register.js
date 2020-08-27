const mysql = require("../../utils/db/database");
const { validationResult } = require("express-validator");
const moment = require("moment");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res, next) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    let err = new Error();
    err.errors = errors;
    err.status = 422;
    return next(err);
  }

  let {
    user_role_id = 1,
    name,
    email_id,
    password,
    mobile_no,
    work_exp_years,
    work_exp_month,
    current_location = "india",
    created_at = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
  } = req.body;

  let resume = req.file.path;

  try {
    const hashedPw = await bcrypt.hash(password, 12);

    if (!hashedPw) {
      let error = new Error();
      error.status = 500;
      error.message = "Password hash failed";
      return next(error);
    }

    let query = `INSERT INTO user_account_details
        (user_role_id, name, email_id, password,
            mobile_no, work_exp_years, work_exp_month,
            resume, current_location, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    let [insertRow] = await mysql.execute(query, [
      user_role_id,
      name,
      email_id,
      hashedPw,
      mobile_no,
      work_exp_years,
      work_exp_month,
      resume,
      current_location,
      created_at,
    ]);

    if (!insertRow) {
      throw new Error("Insert error");
    }

    const generateToken = await jwt.sign(
      {
        email: email_id,
        id: insertRow.insertId,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "5h",
      }
    );
    console.log("here now");

    return res.status(200).json({
      result: insertRow,
      status: 200,
      message: "registered succesfully",
      token: generateToken,
      user_id: insertRow.insertId,
    });
  } catch (err) {
    let error = new Error();
    error.errors = err;
    error.message = err.message;
    next(error);
  }
};
