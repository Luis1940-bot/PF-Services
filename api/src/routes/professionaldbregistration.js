const router = require("express").Router();
const passport = require("../passport/passport.js");
const bcrypt = require("bcrypt");
//https://www.npmjs.com/package/validator
const { userValidationRules, validate } = require("../middleware/validator.js");

const db = require("../db.js");



router.post(
  "/professionalbregistration",
  
  validate,
  async (req, res) => {
    console.log("Where? -->>", req.url);
    const professionalsData = req.body;
    // const userData = {name: "danimir",username: "danimir",surname: "lorko",password: "123456",phone: "1163003314",address: "Holmberg 3435",age: 44,document: "26116568",active: true,email: "dlorko@gmail.com",phone2: "1122334455",};
    //----fin puente
    const professionalsFound = await db.Professionals.findOne({
      where: {
        email: professionalsData.email,
      },
      raw: true,
    });
    if (professionalsFound) {
      return res.status(401).json({
        error: "Professional already exists",
      });
    }
    bcrypt.hash(professionalsData.password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      }
      professionalsData.password = hash;
      await db.Professionals.create(professionalsData);
      res.status(200).json({ message: "Professional created" });
    });
  }
);


module.exports = router;
