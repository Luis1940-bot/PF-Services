const router = require("express").Router();

//middlewares
const userdblogin = require("./userdblogin");
const userdbregistration = require("./userdbregistration");

//Routes and middlewares
router.use("/", userdblogin);
router.use("/", userdbregistration);

module.exports = router;
