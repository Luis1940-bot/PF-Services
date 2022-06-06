const router = require("express").Router();
const db = require("../db.js");

router.get("/users", async (req,res) => {
    const users = await db.Users.findAll()
  
    res.send(users)
  })



router.get("/professional", async (req,res) => {
    const professional= await db.Professionals.findAll()
  
    res.send(professional)
  })

  module.exports = router;