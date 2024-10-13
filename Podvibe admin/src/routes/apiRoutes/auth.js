const express = require("express");
const router = express.Router();

const userEndpoint = require("../../api/user");

router.post("/auth/signin", userEndpoint.AuthenticateUser); //login
router.post("/auth/signup", userEndpoint.createUser); //sign up

module.exports = router;
