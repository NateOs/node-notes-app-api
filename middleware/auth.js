const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  console.log("auth");
  next();
};

module.exports = authMiddleware;
