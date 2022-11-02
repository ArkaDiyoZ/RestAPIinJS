function sendError(res, code, error) {
  res.status(code).json({
    status: "error",
    error,
  });
}

module.exports = sendError;
