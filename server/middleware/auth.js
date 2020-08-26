const jwt = require("jsonwebtoken");

exports.isAuth = async (req, res, next) => {
  const header = req.get("Authorization");
  if (!header) {
    let err = new Error();
    err.message = "No Authorization header found";
    err.status = 401;
    return next(err);
  }
  let token = header.split(" ")[1];

  let decoded;
  try {
    decoded = await jwt.verify(token, process.env.TOKEN_SECRET);
    req.user_id = decoded.id;
    next();
  } catch (error) {
    // console.log(error, "in catch");
    next(error);
  }
};
