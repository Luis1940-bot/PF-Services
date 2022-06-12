const { Router } = require("express");
const express = require("express");
const db = require("../db.js");
const router = Router();
router.use(express.json());
const cors = require("cors");
router.use(cors());

router.post("/postgenerator", async (req, res) => {
  try {
    const {
      date_post,
      hour_post,
      date_ini,
      date_fin,
      needs,
      active,
      locationReference,
      contact_phone,
      id_users,
      city,
    } = req.body;

    const postCreated = await db.Posts.create({
      date_post: date_post,
      hour_post: hour_post,
      date_ini: date_ini,
      date_fin: date_fin,
      needs: needs,
      active: active,
      locationReference: locationReference,
      contact_phone: contact_phone,
      id_users: id_users,
      id_city: city
        ? (
            await db.Cities.findOne({ where: { name: city } })
          )?.id
        : null,
      raw: true,
    });

    if (postCreated) {
      res.status(200).send("Post created");
      res.status(200).json(postCreated);
    } else {
      res.status(400).send("Error");
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
