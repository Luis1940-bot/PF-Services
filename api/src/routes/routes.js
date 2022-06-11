const router = require("express").Router();

//middlewares
const userdblogin = require("./userdblogin");
const userdbregistration = require("./userdbregistration");
const profdbregistration = require("./profdbregistration");
const edituser = require("./editUser");
const editprofessional = require("./editProfessional");
const userAllData = require("./userAllData");
const profAllData = require("./profAllData");
const statesRoute = require("./statesRoute");
const userValidationProcess = require("./userValidationProcess");
const userResendValidationEmail = require("./userResendValidationEmail");
const AddLocationsToDb = require("./AddLocationsToDb");
const GetStatesByCountry = require("./GetStatesByCountry");
const GetCitiesByState = require("./GetCitiesByState");
const userdblogout = require("./userdblogout");
const GetCountries = require("./GetCountries");
const postgenerator = "./PostGenerator.js";

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
router.use("/", userResendValidationEmail);
router.use("/", AddLocationsToDb);
router.use("/", GetStatesByCountry);
router.use("/", GetCitiesByState);
router.use("/", userdblogout);
router.use("/", GetCountries);
router.use("/", postgenerator);

module.exports = router;
