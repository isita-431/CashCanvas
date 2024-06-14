// Initializing the environment variables
require('dotenv').config();
require("./database/connection");

const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const plaidRouter = require('./routes/plaid');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const auth = require('./middleware/auth');
const User = require("./database/models/user.model");
const app = express();
const port = process.env.PORT || 8000;
const frontendUrl = process.env.FRONTEND_URL;

// Middleware
app.use(
  cors({
    origin: frontendUrl,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Server is running successfully!');
})

// Routes
app.use(signupRouter);
app.use(loginRouter);
app.use(auth);
app.use(plaidRouter);

app.listen(port, () => {
  User.collection.deleteMany({});
  console.log(`Server is running on port ${port}`);
});
