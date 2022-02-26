module.exports.removeEmptyAnswers = (answers) => {
  const array = [];
  answers.forEach((item) => {
    if (item.trim() !== '') array.push({ body: item, votes: 0 });
  });

  return array;
};

module.exports.checkIfDuplicateExists = (w) => {
  return new Set(w).size !== w.length;
};

module.exports.getUserIP = (req) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  return ip;
};
