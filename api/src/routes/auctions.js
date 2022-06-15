const { Router } = require("express");
const express = require("express");
const { Op } = require("sequelize");
const db = require("../db.js");
const router = Router();
router.use(express.json());
const cors = require("cors");
router.use(cors());

router.post("/Addpostulates", async (req, res) => {
  try {
    const { date, offer, comment, postId, professionalId, userId } = req.params;
    const [auctionCreated, created] = await db.Auctions.findOrCreate({
      where: {
        [Op.and]: [
          { postId: postId },
          { professionalId: professionalId },
          { userId: userId },
        ],
      },
      defaults: {
        date: date,
        offer: offer,
        comment: comment,
        postId: postId,
        professionalId: professionalId,
        userId: userId,
      },
    });
    if (created) {
      res.status(200).send("Auction created");
    } else {
      res.status(422).send("Existing Auction ");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
