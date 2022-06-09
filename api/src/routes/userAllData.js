const router = require("express").Router();
const db = require("../db.js");

router.get("/users", async (req, res) => {
  const users = await db.User.findAll();

  res.send(users);
});

module.exports = router;
