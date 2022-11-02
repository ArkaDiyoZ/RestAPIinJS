const { sendError } = require("../core/utils");

function sendNotFound(res, entityName) {
  const entity = entityName || "Entity";
  const message = `${entity} is not found.`;

  sendError(res, 404, message);
}

module.exports = sendNotFound;
