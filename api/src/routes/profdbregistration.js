const router = require("express").Router();
const passport = require("../passport/passport.js");

//https://www.npmjs.com/package/validator
// const {
//   profValidationRules,

//   validate,
// } = require("../middleware/validator.js");

//----
const db = require("../db.js");

//----
console.log("ENTRO A profdbregistration.js");

router.post("/profdbregistration", async (req, res) => {
  console.log("Where? -->>", req.url);
  const { id_user, tuition, trainings, photo, cvu } = req.body;

  const prodFound = await db.Users.findOne({
    where: {
      id: id_user,
    },
    raw: true,
  });
  if (prodFound) {
    await db.Professionals.create({
      id_user: id_user,
      tuition: tuition,
      trainings: trainings,
      photo: photo,
      cvu: cvu,
    });
    res.status(201).json({ message: "Professional created" });
  } else {
    return res.status(401).json({
      error: "Usuer No exists",
    });
  }
});

module.exports = router;
