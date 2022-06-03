const router = require("express").Router();
const passport = require("passport");

//----
const db = require('../db.js')
//----
console.log('ENTRO A RUOTES')
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
router.get("/auth", async (req, res) => {
  //npm install bcrypt
  // const { username, password, role, email } = req.body;
  // console.log(req.body);

  const falseUser = {
    name: "dani",
    surname: "lorko",
    password: "123",
    phone: "1163003314",
    address: "Holmberg 3435",
    age: 44,
    document: "26116568",
    active: true,
    email: "dlorko@gmail.com",
    phone2: "1122334455",
  };

  const user = await db.users.create(falseUser);
  res.status(200).json({ message: "User created" });
});

router.post("/loginlocal", async (req, res) => {
  console.log("AQUI loginlocal");
  const { username, password } = req.body;
  console.log("BACK-BODY", username, password);
  const userFound = await Users.findOne({
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
        TOKENKEY,
        { expiresIn: "1h" }
      );

      // res.cookie("accesstoken", accesstoken);
      res.cookie("username", userFound.username, {
        httpOnly: true,
      });
      res.cookie("role", userFound.role);
      res.send("hello");

      // res.status(200).json({
      //   username: userFound.username,
      //   role: userFound.role,
      //   token: accesstoken,
      // });
    }
  });
});

module.exports = router;
