const router = require("express").Router();
const passport = require("../passport/passport.js");
const bcrypt = require("bcrypt");
//https://www.npmjs.com/package/validator
const {
  profValidationRules,
  userValidShortReg,
  validate,
} = require("../middleware/validator.js");

//----
const db = require("../db.js");

//----
console.log("ENTRO A profdbregistration.js");

router.post(
  "/profdbregistration",
  profValidationRules(),
  validate,
  async (req, res) => {
    console.log("Where? -->>", req.url);
    const profData = req.body;
    // const profData = {name: "danimir",username: "danimir",surname: "lorko",password: "123456",phone: "1163003314",address: "Holmberg 3435",age: 44,document: "26116568",active: true,email: "dlorko@gmail.com",phone2: "1122334455",};
    //----fin puente
    const prodFound = await db.Professionals.findOne({
      where: {
        username: profData.username,
      },
      raw: true,
    });
    if (prodFound) {
      return res.status(401).json({
        error: "Professional already exists",
      });
    }
    profData.verified_user = true;
    bcrypt.hash(profData.password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      }
      profData.password = hash;
      await db.Professionals.create(profData);
      res.status(201).json({ message: "Professional created" });
    });
  }
);

router.post(
  "/profdbShortRegistration",
  userValidShortReg(),
  validate,
  async (req, res) => {
    console.log("Where? -->>", req.url);
    const profData = req.body;
    const prodFound = await db.Professionals.findOne({
      where: {
        email: profData.email,
      },
      raw: true,
    });
    if (prodFound) {
      return res.status(401).json({
        error: "Professional email already exists",
      });
    }
    bcrypt.hash(profData.password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      }
      profData.password = hash;
      await db.Professionals.create(profData);
      res.status(201).json({ message: "Professional created" });
    });
  }
);

module.exports = router;
