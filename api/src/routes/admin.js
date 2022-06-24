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
    const postsActive = await db.Posts.findAll({
      where: {},
    });
  } catch (error) {
    res.status(400).send(error);
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
