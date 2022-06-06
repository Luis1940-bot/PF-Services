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

// router.get("/login/success", (req, res) => {
//   if (req.user) {
//     res.status(200).json({
//       success: true,
//       message: "successfull",
//       user: req.user,
//       //   cookies: req.cookies
//     });
//   }
// });

// router.get("/login/failed", (req, res) => {
//   res.status(401).json({
//     success: false,
//     message: "failure",
//   });
// });

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect(CLIENT_URL);
// });

// router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

// router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

// router.get(
//   "/github/callback",
//   passport.authenticate("github", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

// router.get(
//   "/facebook",
//   passport.authenticate("facebook", { scope: ["profile"] })
// );

// router.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

//---------------------------------------------

// router.get("/auth", async (req, res) => {
//   //npm install bcrypt
//   // const { username, password, role, email } = req.body;
//   // console.log(req.body);
//   console.log("Where? -->> api/userlogin");
//   const falseUser = {
//     name: "dani",
//     username: "danimir",
//     surname: "lorko",
//     password: "123456",
//     phone: "1163003314",
//     address: "Holmberg 3435",
//     age: 44,
//     document: "26116568",
//     active: true,
//     email: "dlorko@gmail.com",
//     phone2: "1122334455",
//   };
//   bcrypt.hash(falseUser.password, 10, async (err, hash) => {
//     if (err) {
//       return res.status(500).json({
//         error: err,
//       });
//     }
//     falseUser.password = hash;
//     const user = await db.User.create(falseUser);
//     console.log("user", user);
//     res.status(200).json({ message: "User created" });
//   });
// });

router.get("/userdblogin", async (req, res) => {
  console.log("Where? -->>", req.url);
  const { username, password } = req.body;
  if (username && password) {
    const userFound = await db.Users.findOne({
      where: {
        username,
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
          { id: userFound.id, username: userFound.username },
          process.env.TOKENKEY
        );
        res.cookie("userBackend", accesstoken, {
          expires: new Date(Date.now() + 300000000),
          httpOnly: true,
        });
        res.status(200).json({
          message: "Login success",
          username: userFound.username,
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
