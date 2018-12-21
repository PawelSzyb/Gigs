const isEmpty = data =>
  data === undefined ||
  data === null ||
  (Array.isArray(data) && data.length <= 0);

module.exports = isEmpty;
