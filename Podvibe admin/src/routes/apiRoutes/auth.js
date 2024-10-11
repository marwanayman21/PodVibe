const express = require("express");
const router = express.Router();

const userEndpoint = require("../../api/user");

router.post("/", userEndpoint.AuthenticateUser); //login

module.exports = router;
