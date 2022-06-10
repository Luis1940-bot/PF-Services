const express = require("express");
const router = express.Router();
const db = require("../db.js");

router.get("/GetStatesByCountry/:country", async (req, res) => {
  try {
    // Ageranges: ageranges,
    // Bankings: bankings,
    // Cities: cities,
    // Commissions: commissions,
    // Conditions: conditions,
    // Contracts: contracts,
    // Countries: countries,
    // Posts: posts,
    // Professionals: professionals,
    // Specialties: specialties,
    // States: states,
    // Taxes: taxes,
    // Users: users,
    const country = req.params.country;
    if (country) {
      console.log(country);
      const id_country = await db.Countries.findOne({
        where: { name: country },
        raw: true,
      })
        .then((id_country) => {
          console.log(id_country);
          if (!id_country) {
            res.status(404).send("Country not found");
          }
          const states = db.States.findAll({
            where: {
              id_country: id_country.id,
            },
            raw: true,
          });
          res.status(200).send(states);
        })
        .catch((err) => {
          console.log(err);
          res
            .status(500)
            .send({ error: "There was an error retrieving the states" });
        });
    }
    res.status(500).send("No country specified in the request");
  } catch {
    res.status(400).send("Error during GetStatebyCountry Process");
  }
});

module.exports = router;
