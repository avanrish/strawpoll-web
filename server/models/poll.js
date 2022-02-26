const { model, Schema } = require('mongoose');

const pollSchema = new Schema({
  title: String,
  multiple: Boolean,
  visibility: String,
  answers: [{ body: String, votes: Number }],
  createdAt: String,
  voted: [{ ip: String, uid: String, answers: [String] }],
  name: String,
  uid: String,
});

module.exports = model('Poll', pollSchema);
