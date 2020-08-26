const mysql = require("../../utils/db/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginController = async (req, res, next) => {
  let { email, password } = req.body;

  try {
    let query = `SELECT * FROM user_account_details WHERE email_id = ?`;
    let [user] = await mysql.execute(query, [email]);

    if (!user[0]) {
      let err = new Error();
      err.status = 404;
      err.message = "User not found";
      throw err;
    }

    user = user[0];
    let checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      let err = new Error();
      err.status = 401;
      err.message = "wrong password";
      throw err;
    }
    const token = await jwt.sign(
      {
        email: user.email_id,
        id: user.id,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "5h" }
    );

    return res.status(200).json({ token, user_id: user.id });
  } catch (error) {
    next(error);
  }
};
