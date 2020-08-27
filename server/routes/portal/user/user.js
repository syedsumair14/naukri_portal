const express = require("express");
const registerationValidation = require("../../../utils/sanitization/user/userValidation");
const { registerUser } = require("../../../controller/user/register");

const {
  validateEmployment,
} = require("../../../utils/sanitization/user/employementUpdate");

const {
  employmentUpdateController,
} = require("../../../controller/user/employmentUpdate");

const { loginController } = require("../../../controller/user/login");
const { isAuth } = require("../../../middleware/auth");

const {
  validateEducation,
} = require("../../../utils/sanitization/user/educationUpdate");

const {
  educationUpdateController,
} = require("../../../controller/user/educationUpdate");

const router = express.Router();

router.post("/register", registerationValidation, registerUser);
router.post("/login", loginController);
router.put(
  "/employmentUpdate",
  isAuth,
  validateEmployment,
  employmentUpdateController
);
router.put(
  "/educationUpdate",
  isAuth,
  validateEducation,
  educationUpdateController
);

module.exports = router;
