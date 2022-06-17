const { Router } = require("express");
const express = require("express");
const { Op } = require("sequelize");
const db = require("../db.js");
const router = Router();
router.use(express.json());
const cors = require("cors");
router.use(cors());

router.post("/addContracts", async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
