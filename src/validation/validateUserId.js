function validateUserId(rawId) {
  const id = Number.parseInt(rawId);

  if (id < 1 || Number.isNaN(id)) {
    return {
      status: "error",
      error: "Id not a number or lesser than zero!",
    };
  }

  return {
    status: "success",
    data: id,
  };
}

module.exports = validateUserId;
