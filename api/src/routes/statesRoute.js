const express = require("express");
const router = express.Router();
const db = require("../db.js");
const cors = require("cors");
router.use(cors());

console.log("ENTRO a statesRoute.js");

const states = [
  "Misiones",
  "San Luis",
  "San Juan",
  "Entre Ríos",
  "Santa Cruz",
  "Río Negro",
  "Chubut",
  "Córdoba",
  "Mendoza",
  "La Rioja",
  "Catamarca",
  "La Pampa",
  "Santiago del Estero",
  "Corrientes",
  "Santa Fe",
  "Tucumán",
  "Neuquén",
  "Salta",
  "Chaco",
  "Formosa",
  "Jujuy",
  "Ciudad Autónoma de Buenos Aires",
  "Buenos Aires",
  "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
];

router.post("/states", async (req, res) => {
  console.log("Where? -->>", req.url);
  const statesMaped = states.map((prov) => ({ name: prov }));
  await db.States.bulkCreate(statesMaped)
    .then(() => {
      db.States.findAll().then((states) => {
        res.json(states);
      });
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
