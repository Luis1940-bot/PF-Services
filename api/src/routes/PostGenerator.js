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
      state,
      country,
      specialtyPatient,
      agePatient,
      namePatient,
      availableTime_0,
      availableTime_1,
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
      userId: id_users,
      stateId: state
        ? (
            await db.States.findOne({ where: { name: state } })
          )?.id
        : null,
      cityId: city
        ? (
            await db.Cities.findOne({ where: { name: city } })
          )?.id
        : null,
      countryId: country
        ? (
            await db.Countries.findOne({ where: { name: country } })
          )?.id
        : null,
      specialtyId: specialtyPatient
        ? (
            await db.Specialties.findOne({
              where: { specialty: specialtyPatient },
            })
          )?.id
        : null,
      raw: true,
      agePatient: agePatient,
      namePatient: namePatient,
      availableTime_0: availableTime_0,
      availableTime_1: availableTime_1,
    });

    if (postCreated) {
      res.status(200).send("Post created");
    } else {
      res.status(422).send("Existing Post ");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/infoDetallePost", async (req, res) => {
  try {
    const posts = await db.Posts.findAll({
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
        "locationReference",
        "contact_phone",
      ],
      include: [
        {
          model: db.Users,
          attributes: [
            "id",
            "name",
            "surname",
            "phone",
            "address",
            "age",
            "document",
            "email",
            "phone2",
          ],
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
    res.status(201).json(posts);
  } catch (error) {
    res.send(error);
  }
});

router.get("/infoCardPost", async (req, res) => {
  try {
    const posts = await db.Posts.findAll({
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
      ],

      include: [
        {
          model: db.Users,
          attributes: ["id", "name", "age"],

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

    res.status(201).json(posts);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/deletePost/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      await db.Posts.destroy({
        where: {
          id: id,
        },
      });
      return res.status(200).send("Post deleted");
    } else {
      return res.status(400).json({
        error: "information required for post validation",
      });
    }
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
