const router = require("express").Router();

//middlewares
const userdblogin = require("./userdblogin");

const userdbregistration = require("./userdbregistration");
const profdbregistration = require("./profdbregistration");
const edituser = require("./edituser");
const editprofessional = require("./editprofessional");
const userAllData = require("./userAllData");
const profAllData = require("./profAllData");
//Routes and middlewares
router.use("/", userdblogin);

router.use("/", userdbregistration);
router.use("/", profdbregistration);
router.use("/", edituser);
router.use("/", editprofessional);
router.use("/", userAllData);
router.use("/", profAllData);

module.exports = router;
