const jwt = require('jsonwebtoken');
const User = require('../database/models/user.model');

const auth = (req, res, next) => {
  const { cookies } = req;
  if (cookies.jwt) {
    try {
      const data = jwt.verify(cookies.jwt, process.env.SECRET);
      req.id = data.id;
      req.token = cookies.jwt;

      const user = User.findOne({ _id: data.id });
      if (!user) {
        return res.status(401).send({
          success: false,
          message: 'Sorry you are not authenticated.'
        });
      }
      req.user = user;
      return next();
    } catch (error) {
      console.log(error.message);
      return res.status(401).send({
        success: false,
        message: 'Sorry you are not authenticated.'
      });
    }
  }

  return res.status(401).send({
    success: false,
    message: 'Sorry you are not authenticated.'
  });
};

module.exports = auth;
