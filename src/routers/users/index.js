const express = require("express");
const router = express.Router();

const getUser = require("./get-user");
const getUsers = require("./get-users");

router.get("/", getUsers);
router.get("/:id", getUser);

router.post("/", async (req, res) => {});

router.put("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {});

module.exports = router;
