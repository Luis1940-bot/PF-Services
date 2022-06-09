const router = require("express").Router();

//middlewares
const userdblogin = require("./userdblogin");
const userdbregistration = require("./userdbregistration");
const profdbregistration = require("./profdbregistration");
const edituser = require("./edituser");
const editprofessional = require("./editprofessional");
const userAllData = require("./userAllData");
const profAllData = require("./profAllData");
const statesRoute = require("./statesRoute");
const userValidationProcess = require("./userValidationProcess");

//Routes and middlewares
router.use("/", userdblogin);
router.use("/", userdbregistration);
router.use("/", profdbregistration);
router.use("/", edituser);
router.use("/", editprofessional);
router.use("/", userAllData);
router.use("/", profAllData);
router.use("/", statesRoute);
router.use("/", userValidationProcess);

module.exports = router;
