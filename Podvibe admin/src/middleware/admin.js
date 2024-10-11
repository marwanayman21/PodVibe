const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res
      .status(400)
      .send({ message: "Access denied, no token provided" });
  }
  jwt.verify(token, process.env.JWTPRIVATEKEY, (err, validToken) => {
    if (err) {
      return res.status(400).send({ message: "Invalid token" });
    } else {
      if (!validToken.isAdmin) {
        //not an admin
        res
          .status(403)
          .send({ message: "You don't have access to this content" });
      }
      req.user = validToken;
      next();
    }
  });
};
