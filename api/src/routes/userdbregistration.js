const router = require("express").Router();
const passport = require("../passport/passport.js");
const bcrypt = require("bcrypt");
//https://www.npmjs.com/package/validator
const {
  userValidationRules,
  userValidShortReg,
  validate,
} = require("../middleware/validator.js");

//----
const db = require("../db.js");

//----
console.log("ENTRO A userdbregistration.js");

router.post(
  "/userdbregistration",
  userValidationRules(),
  validate,
  async (req, res) => {
    console.log("Where? -->>", req.url);
    const userData = req.body;
    // const userData = {name: "danimir",username: "danimir",surname: "lorko",password: "123456",phone: "1163003314",address: "Holmberg 3435",age: 44,document: "26116568",active: true,email: "dlorko@gmail.com",phone2: "1122334455",};
    //----fin puente
    const userFound = await db.Users.findOne({
      where: {
        username: userData.username,
      },
      raw: true,
    });
    if (userFound) {
      return res.status(401).json({
        error: "User already exists",
      });
    }
    userData.verified_user = true;
    bcrypt.hash(userData.password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      }
      userData.password = hash;
      await db.Users.create(userData);
      res.status(201).json({ message: "User created" });
    });
  }
);

router.post(
  "/userdbShortRegistration",
  userValidShortReg(),
  validate,
  async (req, res) => {
    console.log("Where? -->>", req.url);
    const userData = req.body;
    // const userData = {name: "danimir",username: "danimir",surname: "lorko",password: "123456",phone: "1163003314",address: "Holmberg 3435",age: 44,document: "26116568",active: true,email: "dlorko@gmail.com",phone2: "1122334455",};
    //----fin puente
    const userFound = await db.Users.findOne({
      where: {
        email: userData.email,
      },
      raw: true,
    });
    if (userFound) {
      return res.status(401).json({
        error: "email already exists",
      });
    }
    bcrypt.hash(userData.password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      }
      userData.password = hash;
      await db.Users.create(userData);
      res.status(201).json({ message: "User created" });
    });
  }
);

module.exports = router;
