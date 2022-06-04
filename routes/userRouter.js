const express = require("express");
const { append } = require("express/lib/response");
const { JsonWebTokenError } = require("jsonwebtoken");
const router = express.Router();
// const middleware = require("../middleware");
const jwt = require("jsonwebtoken");
const UserData = require("../models/usersModel");
// const TotalData = require("../models/reserveModal")
// const ReserveData = require("../models/reserveModal");
const req = require("express/lib/request");

router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const { firstname, lastname, username, password, conformPassword } = req.body;
    let exist = await UserData.findOne({ username });
    if (exist) {
      return res.status(400).send("user already exist");
    }
    if (password !== conformPassword) {
        console.log("not ok")
      return res.status(401).send("password are not matching");
    }
    if (password === conformPassword) {
        console.log("ok")
      let newUser = new UserData({
        firstName: firstname,
        lastName: lastname,
        username,
        password: password,
     
      });
      await newUser.save();
      res.status(200).send("Register Successfully");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
});
router.post("/login", async (req, res) => {

  console.log(req.body)
  try {
    const { username, password } = req.body;
    let exist = await UserData.findOne({ username });
    console.log(exist)
    if (!exist) {
      return res.status(400).send("User not found");
    }
    if (exist.password !== password) {
      return res.status(400).send("Invalid credentials");
    }
    let payload = {
      user: {
        id: exist.id,
      },
    };
    jwt.sign(payload, "vamshi gujjuboina", { expiresIn: 3600000 }, (err, token) => {
      if (err) throw err;
      // res.status(200).send(exist)
      return res.json({ token,data: exist });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
