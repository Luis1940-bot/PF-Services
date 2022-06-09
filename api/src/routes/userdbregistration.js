const router = require("express").Router();
const passport = require("../passport/passport.js");
const bcrypt = require("bcrypt");
const { sendEmailToValidate } = require("../nodemailer/nodemailer.js");
//https://www.npmjs.com/package/validator
const {
  userValidationRules,
  userValidShortReg,
  validate,
} = require("../middleware/validator.js");

//----
const db = require("../db.js");
const { raw } = require("body-parser");

//----
console.log("ENTRO A userdbregistration.js");

router.post(
  "/userdbRegistration",
  userValidationRules(),
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
      states,
    } = req.body;
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
      await db.States.findOne({
        where: { name: states },
        raw: true,
      })
        .then((State) => {
          if (State) {
            db.Users.create({
              email: email,
              password: password,
              name: name,
              surname: surname,
              phone: phone,
              address: address,
              age: age,
              document: document,
              phone2: phone2,
              StateId: State.id,
            }).then((user) => {
              const { id, email, name, surname } = user;
              sendEmailToValidate(email, id, name, surname);
              res.status(200).json({
                message: "User created",
              });
            });
          } else {
            res.status(404).json({
              error: "State not found",
            });
          }
        })
        .catch((err) => {
          res.status(404).json({
            error: err,
          });
        });
    });
  }
);

// console.log(userCreated);
/* const countrySearched = await Countries.findAll({
//=======
      const userCreated = await db.Users.create({
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

      /* const countrySearched = await Countries.findAll({
//>>>>>>> back_end
        where: {
          name:country,
        },
      });

      const citySearched = await Cities.findAll({
        where: {
          name:city,
        },
      }); */

//<<<<<<< DNL_0608_2daMailyModelos
// const stateSearched = await db.States.findAll({
//   where: {
//     name:states,
//   },
// });
// console.log(stateSearched)
//=======
// const stateSearched = await db.States.findAll({
//   where: {
//     name: states,
//   },
//   raw: true,
// });

// await userCreated.addStates(stateSearched[0]);
/* userCreated.addCountries(countrySearched);
      userCreated.addCities(citySearched); */
//>>>>>>> back_end

// await userCreated.addStates(stateSearched);
/* userCreated.addCountries(countrySearched);
      userCreated.addCities(citySearched); */

module.exports = router;
