const express = require("express");
const User = require("../database/models/user.model");
const router = express.Router();

router.post("/login", async (req, res) => {
    try {
      const user = await User.findByCredentials({ ...req.body });
      const token = await user.generateAuthToken();
  
      // Creating a http only cookie, which is used for authorization
      res.cookie("jwt", token, {
        sameSite: "strict",
        path: "/",
        httpOnly: true,
      });
  
      res.status(200).send({
        success: true,
        message: "Successfully logged in.",
        user: user.getPublicProfile(),
      });
    } catch (error) {
      res.status(401).send({
        success: false,
        message: error.message,
      });
    }
  });

module.exports = router;