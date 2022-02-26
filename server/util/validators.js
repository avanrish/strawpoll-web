const { checkIfDuplicateExists, removeEmptyAnswers } = require('./functions');

module.exports.validatePollInput = (title, answers) => {
  const errors = {};
  if (title.trim() === '') errors.title = 'Title must not be empty';
  if (title.length > 100) errors.title = 'Title can have max 100 characters';

  const newAnswers = removeEmptyAnswers(answers);
  if (newAnswers.length < 2)
    errors.input = 'You must provide at least 2 answers';

  if (checkIfDuplicateExists(newAnswers.map((i) => i.body)))
    errors.input = 'Answers must be unique';

  return {
    errors,
    valid: Object.keys(errors).length === 0,
    newAnswers,
  };
};

module.exports.validateVoteInput = (selected) => {
  const errors = {};
  if (selected.length === 0) errors.input = 'Select an answer.';
  return {
    errors,
    valid: Object.keys(errors).length === 0,
  };
};
