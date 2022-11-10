const { sendSuccess } = require("../../core/utils");
const { validateUserId } = require("../../validation");
const User = require("../../models/user/User");
const { sendBadRequest, sendNotFound } = require("../../utils");

function changeUser(req, res){
    
    const newUserName = req.body.name;
    const newUserSurename = req.body.surename;

    const validation = validateUserId(req.params.id);

    if (validation.status === "error") {
      return sendBadRequest(res, validation);
    }
  
    const id = validation.data;
    const user = User.changeById(id, newUserName, newUserSurename);

    if (!user) {
      return sendNotFound(res, "User");
    }
  
    sendSuccess(res, { user });
}

module.exports = changeUser;