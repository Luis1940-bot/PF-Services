const { Router } = require("express");
const express = require("express");
const db = require("../db.js");
const router = Router();
router.use(express.json());
const cors = require("cors");
router.use(cors());

router.post("/postgenerator", async (req, res) => {
  try {
    const { name } = req.body;
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
