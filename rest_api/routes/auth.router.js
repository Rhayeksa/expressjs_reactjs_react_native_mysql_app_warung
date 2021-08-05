const express = require("express");
const router = express.Router();
const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

router.post(
  "/register",
  [verifySignUp.checkDuplicateEmail, verifySignUp.checkRolesExisted],
  controller.register
);

router.post("/login", controller.login);

module.exports = router;
