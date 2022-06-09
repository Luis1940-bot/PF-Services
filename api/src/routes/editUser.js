const express = require("express");
const router = express.Router();
const db = require("../db.js");

router.put("/edituser", async (req, res) => {
  const {
    email,
    password,
    name,
    surname,
    phone,
    address,
    age,
    document,
    phone2,
    state,
    country,
    city
    
  } = req.body;
  const userFinded = await db.Users.findOne({
    where: { email: email },
  });
  try {
    if (userFinded) {
      await userFinded.update({
        email: email,
        password: password,
        name: name,
        surname: surname,
        phone: phone,
        address: address,
        age: age,
        document: document,
        phone2: phone2,
        state:state,
        country:country,
        city:city
      });
    }
    res.status(200).send("Se modificaron los datos correctamente");
  } catch {
    res
      .status(400)
      .send("El mail ingresado no se encuetra en la base de datos");
  }
});

module.exports = router;
