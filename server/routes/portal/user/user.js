const express = require("express");
const registerationValidation = require("../../../utils/sanitization/user/userValidation");
const { registerUser } = require("../../../controller/user/register");
const uplaod = require("../../../app");
const router = express.Router();

router.post("/register", registerationValidation, registerUser);
// router.post("/uploadResume", uplaod.single("myFile"));

module.exports = router;
