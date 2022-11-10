const { sendSuccess } = require("../../core/utils");
const { validateUserId } = require("../../validation");
const User = require("../../models/user/User");
const { sendBadRequest, sendNotFound } = require("../../utils");
const { validateCountUserId } = require("../../validation");
const users = require("../../models/user/DataBaseModel");


function addNewUser(req, res){

    const newUser = req.body;
    const validation = validateCountUserId(newUser.id, users);
    
    console.log(newUser);

    console.log(validateCountUserId.status);
    
    if (validation.status === "error"){
        return sendBadRequest(res, validation);
    }

    const addUsers = User.addNewUser(newUser);
    
    sendSuccess(res, { addUsers });
}

module.exports = addNewUser;