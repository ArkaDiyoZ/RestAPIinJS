const User = require("../../models/user/User");
const { validateUserId, validateUserIdInBase } = require("../../validation");
const { sendSuccess } = require("../../core/utils");
const { sendBadRequest, sendNotFound } = require("../../utils");
const users = require("../../models/user/DataBaseModel");

function deleteUser(req, res) {

    const validation = validateUserIdInBase(req.params.id, users);
    console.log(validation);

    if (validation.status === "error") {
      return sendBadRequest(res, validation);
    }
  
    const id = validation.data;

    const user = User.deleteUser(id);
  
    if (!user) {
      return sendNotFound(res, "User");
    }
  
    sendSuccess(res, { user });

}

module.exports = deleteUser;