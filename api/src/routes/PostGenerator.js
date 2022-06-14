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
      specialtyPatient,
      agePatient,
      namePatient,
      availableTime_0,
      availableTime_1,
    } = req.body;
    console.log(db);
    console.log(req.body);
    console.log(
      "<<<<<<<<<<<<<<<<<<<<<<",
      await db.Specialties.findOne({
        where: { specialty: specialtyPatient },
        raw: true,
      })
    );
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
      cityId: city
        ? (
            await db.Cities.findOne({ where: { name: city } })
          )?.id
        : null,
      specialtyId: specialtyPatient
        ? (
            await db.Specialties.findOne({
              where: { specialty: specialtyPatient },
            })
          )?.id
        : null,
      agePatient: agePatient,
      namePatient: namePatient,
      availableTime_0: availableTime_0,
      availableTime_1: availableTime_1,
    });

    if (postCreated) {
      res.status(200).send("Post created");
    } else {
      res.status(400).send("Error");
    }
  } catch (error) {
    res.send(error);
  }
});

router.get("/infoDetallePost", async (req, res) => {
  try {
    const posts = await db.Posts.findAll({
      include: [
        {
          model: db.Users,
          //attributes: ["name"],
          //required: true,
        },
        {
          model: db.Cities,
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

router.get("/infoGralPost", async (req, res) => {
  try {
    const posts = await db.Posts.findAll({
      attributes: ["id", "date_post", "date_ini", "date_fin", "needs"],

      include: [
        {
          model: db.Users,
          attributes: ["name", "age"],

          //required: true,
        },
        {
          model: db.Cities,
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
