const { Router } = require("express");
const express = require("express");
const { Op } = require("sequelize");
const db = require("../db.js");
const router = Router();
router.use(express.json());
const cors = require("cors");
router.use(cors());

//?----POSTS------
router.get("/postsActive", async (req, res) => {
  try {
    const posts = await db.Posts.findAll({
      where: { active: 1 },
      attributes: [
        "id",
        "hour_post",
        "date_post",
        "date_ini",
        "date_fin",
        "needs",
        "availableTime_0",
        "availableTime_1",
        "agePatient",
        "namePatient",
        "addressPatient",
      ],

      include: [
        {
          model: db.Users,
          attributes: ["id", "name", "surname", "age"],

          //required: true,
        },
        {
          model: db.Specialties,
          attributes: ["specialty"],
          //required: true,
        },
        {
          model: db.Cities,
          attributes: ["name"],
        },
        {
          model: db.States,
          attributes: ["name"],
        },
        {
          model: db.Countries,
          attributes: ["name"],
          //required: true,
        },
      ],
    });

    if (posts.length > 0) {
      res.status(201).json(posts);
    } else {
      res.status(422).json("Not found");
    }
  } catch (error) {
    res.send(error);
  }
});

//?----USERS------
router.get("/auctions", async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send(error);
  }
});

//?-----PROFESSIONALS--------
router.get("/auctions", async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send(error);
  }
});

//?----CONTRACTS ---------
router.get("/auctions", async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send(error);
  }
});

//?-----OFFERS----------
router.get("/auctions", async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
