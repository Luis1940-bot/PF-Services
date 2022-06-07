const express = require("express");
const router = express.Router();
const db = require("../db.js");

router.put("/edituser", async (req, res) => {
  const userData = req.body;
  const userFinded = await db.Users.findOne({
    where: { email: userData.email },
  });
  try {
    if (userFinded) {
      await userFinded.update(userData);
    }
    res.status(200).send("Se modificaron los datos correctamente");
  } catch {
    res
      .status(400)
      .send("El mail ingresado no se encuetra en la base de datos");
  }
});

module.exports = router;
