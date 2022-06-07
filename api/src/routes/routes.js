const router = require("express").Router();

//middlewares
const userdblogin = require("./userdblogin");
const profdblogin = require("./profdblogin");
const userdbregistration = require("./userdbregistration");
const profdbregistration = require("./profdbregistration");
const edituser = require("./edituser");
const editprofessional = require("./editprofessional");

//Routes and middlewares
router.use("/", userdblogin);
router.use("/", profdblogin);
router.use("/", userdbregistration);
router.use("/", profdbregistration);
router.use("/", edituser);
router.use("/", editprofessional);

module.exports = router;
