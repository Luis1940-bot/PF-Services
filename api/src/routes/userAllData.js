const { Router } = require("express");
const express = require("express");

const db = require("../db.js");
const router = Router();
router.use(express.json());
const cors = require("cors");
router.use(cors());

router.get("/users", async (req, res) => {
  try {
    const users = await db.Users.findAll({
      include: [
        {
          model: db.States,
          // required: true,
        },
      ],
      // include: [
      //   {
      //     model: db.Cities,
      //     required: true,
      //   },
      // ],
      // include: [
      //   {
      //     model: db.Countries,
      //     required: true,
      //   },
      // ],
    });

    res.status(201).json(users);
  } catch (e) {
    res.send(e);
  }
});

router.get("/user_professional", async (req, res) => {
  try {
    const usersProfessionals = await db.Users.findAll({
      include: [
        {
          model: db.States,
          required: true,
        },
      ],
      include: [
        {
          model: db.Cities,
          required: true,
        },
      ],
      include: [
        {
          model: db.Countries,
          required: true,
        },
      ],
      include: [
        {
          model: db.Professionals,
          required: true,
        },
      ],
    });

    res.status(201).json(usersProfessionals);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
