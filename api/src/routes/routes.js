const router = require("express").Router();

//middlewares
const userdblogin = require("./userdblogin");
const profdblogin = require("./profdblogin");
const userdbregistration = require("./userdbregistration");
const profdbregistration = require("./profdbregistration");


//Routes and middlewares
router.use("/", userdblogin);
router.use("/", profdblogin);
router.use("/", userdbregistration);
router.use("/", profdbregistration);

module.exports = router;
