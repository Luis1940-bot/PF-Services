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
      const states = await db.Countries.findAll({
        where: { name: country },
        include: [
          {
            model: db.States,
            attributes: ["name"],
          },
        ],
      });
    }
    res.status(500).send("No country specified in the request");
  } catch {
    res.status(400).send("Error during GetStatebyCountry Process");
  }
});

module.exports = router;
