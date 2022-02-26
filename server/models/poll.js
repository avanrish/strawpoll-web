const { model, Schema } = require('mongoose');

const pollSchema = new Schema({
  title: String,
  multiple: Boolean,
  visibility: String,
  answers: [{ body: String, votes: Number }],
  createdAt: String,
  voted: [{ ip: String, name: String, answers: [String] }],
  name: String,
});

module.exports = model('Poll', pollSchema);
