const express = require("express");
const router = express.Router();
const UserService = require("../services/UserService");

router.get("/", async (req, res) => {
  const users = await UserService.findAll();
  res.render("users", { users: users });
});

router.post("/login", async (req, res) => {
  // const user = req.body;
  const user = await UserService.find(req.body);
  res.render("user", { user: user });
});

router.post("/logout", (req, res) => {
  res.render("blog", { blog: blog });
});

router.post("/register", async (req, res) => {
  const registeredUser = await UserService.add(req.body);
  // await UserService.add(req.body);
  // res.render("users");
  res.send(registeredUser);
});
module.exports = router;
