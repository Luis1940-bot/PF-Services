// const router = require("express").Router();
const express = require("express");
const router = express.Router();
const passport = require("../passport/passport.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

//----
const db = require("../db.js");
router.use(cookieParser());
router.use(
  express.urlencoded({
    extended: true,
  })
);

// const sequelize = require('../db');
// const {User} = sequelize.models;
// console.log('sequelize.models',sequelize)
//----
console.log("ENTRO A userdblogin.js");
// const CLIENT_URL = "http://localhost:3000/";

router.get("/userdblogin", async (req, res) => {
  console.log("Where? -->>", req.url);
  const { email, password } = req.body;
  if (email && password) {
    const userFound = await db.User.findOne({
      where: {
        email,
      },
      raw: true,
    });
    if (!userFound) {
      return res.status(401).json({
        error: "User not found",
      });
    }
    bcrypt.compare(password, userFound.password, (err, result) => {
      if (err) {
        return res.status(401).json({
          error: "Auth failed",
        });
      }
      if (!result) {
        return res.status(401).json({ error: "Wrong password" });
      } else {
        const accesstoken = jwt.sign(
          { id: userFound.id, email: userFound.email },
          process.env.TOKENKEY
        );
        res.cookie("userBackend", accesstoken, {
          expires: new Date(Date.now() + 300000000),
          httpOnly: true,
        });
        res.status(200).json({
          message: "Login success",
          email: userFound.email,
          token: accesstoken,
        });
      }
    });
  } else {
    return res.status(401).json({
      error: "Username and password are required",
    });
  }
});

//RUTA SOLO PARA PROBAR LECTURA DE COOKIE con jwt.verify
router.get("/cookieBackendRead", (req, res) => {
  console.log("Where? -->> api/cookieBackendRead");
  console.log("req.cookies", req.cookies);
  const token = req.cookies.userBackend;
  const decoded = jwt.verify(token, process.env.TOKENKEY);

  console.log("decoded", decoded);

  res.status(200).json({
    message: "Cookie read",
  });
});

module.exports = router;
