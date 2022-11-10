const User = require("../../models/user/User");
const { validateUserId } = require("../../validation");
const { sendSuccess } = require("../../core/utils");
const { sendBadRequest, sendNotFound } = require("../../utils");

function getUser(req, res) {
  const validation = validateUserId(req.params.id);

  if (validation.status === "error") {
    return sendBadRequest(res, validation);
  }

  console.log(validation.status);

  const id = validation.data;
  const user = User.getById(id);


  if (!user) {
    return sendNotFound(res, "User");
  }

  sendSuccess(res, { user });
}

module.exports = getUser;
