const User = require("../../models/user/User");
const { sendSuccess } = require("../../core/utils");

function getUsers(_, res) {
  const users = User.getAll();

  sendSuccess(res, { users });
}

module.exports = getUsers;
