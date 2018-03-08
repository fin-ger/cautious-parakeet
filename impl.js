function get_time(decimals) {
  if (typeof decimals !== "number") {
    decimals = 3;
  }

  const factor = 10**decimals;
  return Date.now() / factor;
}

module.exports.get_time = get_time;
