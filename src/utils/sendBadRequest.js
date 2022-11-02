const { sendError } = require("../core/utils");

function sendBadRequest(res, validation) {
  sendError(res, 400, validation.error);
}

module.exports = sendBadRequest;
