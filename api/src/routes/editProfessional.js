const express = require("express");
const router = express.Router();
const db = require("../db.js");

router.put("/editprofessional", async (req, res) => {
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
    id_user,
    tuition,
    trainings,
    photo,
    cvu,
  } = req.body;
  const profFinded = await db.Professional.findOne({
    where: { id_user: id_user },
  });
  const userFinded = await db.User.findOne({
    where: { id: id_user },
  });
  try {
    Promise.all([profFinded, userFinded]).then((res1, res2) => {
      if (res1[0]) {
        profFinded.update({
          tuition: tuition,
          trainings: trainings,
          photo: photo,
          cvu: cvu,
        });
      }
      if (res1[1]) {
        userFinded.update({
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
      }
      res.status(200).send("Se modificaron los datos correctamente");
    });
  } catch {
    res
      .status(400)
      .send("El mail ingresado no se encuetra en la base de datos");
  }
});

module.exports = router;
