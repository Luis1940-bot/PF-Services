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
  "/userdbRegistration",

  validate,
  async (req, res) => {
    console.log("Where? -->>", req.url);
    let {
      email,
      password,
      name,
      surname,
      phone,
      address,
      age,
      document,
      phone2,
      states
    } = req.body;

    //----fin puente
    const userFound = await db.Users.findOne({
      where: {
        email: email,
      },
      raw: true,
    });
    if (userFound) {
      return res.status(401).json({
        error: "email already exists",
      });
    }
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      }
      password = hash;

     const userCreated= await db.Users.create({
        email: email,
        password: password,
        name: name,
        surname: surname,
        phone: phone,
        address: address,
        age: age,
        document: document,
        phone2: phone2,
      });
      console.log(userCreated)
      /* const countrySearched = await Countries.findAll({
        where: {
          name:country,
        },
      });

      const citySearched = await Cities.findAll({
        where: {
          name:city,
        },
      }); */
      
      const stateSearched = await db.States.findAll({
        where: {
          name:states,
        },
      });
      console.log(stateSearched)

      await userCreated.addStates(stateSearched);
      /* userCreated.addCountries(countrySearched);
      userCreated.addCities(citySearched); */

      res.status(201).json({ message: "User created" });
    });
  }
);

module.exports = router;
