const jwt = require("jsonwebtoken");
const User = require('../models/User');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
      if (err) {
        res.status(403).json('Token inválido');
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json('No estás autenticado');
  }
};

module.exports = { verifyToken };
