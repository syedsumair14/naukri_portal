const express = require("express");
const registerationValidation = require("../../../utils/sanitization/user/userValidation");
const { registerUser } = require("../../../controller/user/register");
const {
  validateEmployment,
} = require("../../../utils/sanitization/user/employementUpdate");
const {
  employmentUpdateController,
} = require("../../../controller/user/employmentUpdate");

const router = express.Router();

router.post("/register", registerationValidation, registerUser);
router.put("/employmentUpdate", validateEmployment, employmentUpdateController);
router.put("/educationUpdate");

module.exports = router;
