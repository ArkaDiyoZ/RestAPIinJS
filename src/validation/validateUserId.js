function validateUserId(rawId) {
  const id = Number.parseInt(rawId);

  if (id < 1 || Number.isNaN(id) || id > 10000) {
    return {
      status: "error",
      error: "Id not a number or not correct!",
    };
  }

  return {
    status: "success",
    data: id,
  };
}

module.exports = validateUserId;
