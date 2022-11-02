"use strict";
const express = require("express");
const bodyParser = require("body-parser");

const usersRouter = require("./src/routers/users");

// Init
const app = express();
const PORT = process.env.PORT || 3000;

// Configuration
app.use(bodyParser.json());
app.use("/users", usersRouter);

// Run
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
