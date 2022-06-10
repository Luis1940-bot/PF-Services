const router = require("express").Router();
const db = require("../db.js");

router.get("/users", async (req, res) => {
  const users = await db.Users.findAll();

  res.send(users);
});

module.exports = router;
