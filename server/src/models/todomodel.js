var Mongoose = require('mongoose'),
  Schema = Mongoose.Schema;

var TodoSchema = new Schema({
  description: { type: String, unique: false, required: true }
});

var Todo = Mongoose.model('todo', TodoSchema);
module.exports = Todo;