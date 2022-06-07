const router = require("express").Router();

//middlewares
const userdblogin = require("./userdblogin");
const userdbregistration = require("./userdbregistration");
const professionaldbregistration = require("./professionaldbregistration");
const edituser = require("./edituser");
const editprofessional = require("./editprofessional");
const allData = require("./allData");
const ubicacioninfo = require("./ubicacioninfo");
//Routes and middlewares
router.use("/", userdblogin);
router.use("/", userdbregistration);
router.use("/", professionaldbregistration);
router.use("/", edituser);
router.use("/", editprofessional);
router.use("/", allData);
router.use("/", ubicacioninfo);

module.exports = router;
