const express = require("express");
const User = require("../database/models/user.model");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const user = new User({ ...req.body });
    const token = await user.generateAuthToken();

    // Creating a http only cookie, which is used for authorization
    res.cookie("jwt", token, {
      sameSite: "strict",
      path: "/",
      httpOnly: true,
    });

    res.status(201).send({
      success: true,
      message: "Successfully created an account",
      user: user.getPublicProfile(),
    });
  } catch (error) {
    const message = error.message;
    let errorMessage = "";
    console.log(error.message);

    // Checking for duplicates
    if (message.includes("email")) {
      errorMessage ="Looks like you have an account associated with us. Please login in.";
    } else {
      errorMessage = "Opps, something went wrong, try again.";
    }

    res.status(400).send({
      success: false,
      message: errorMessage,
    });
  }
});

module.exports = router;