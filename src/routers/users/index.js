const express = require("express");
const router = express.Router();

const getUser = require("./get-user");
const getUsers = require("./get-users");
const changeUser = require("./put-change-user");
const addNewUser = require("./post-add-user");
const deleteUser = require("./del-user");

router.get("/", getUsers);
router.get("/:id", getUser);

router.put("/change/:id", changeUser);

router.post("/create", addNewUser);

router.delete("/delete/:id", deleteUser);

module.exports = router;
