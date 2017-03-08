var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  todo: {
    type: String,
    required: true
  },
  completeBy: {
    type: Date,
    required: true,
    default: new Date(+new Date() + 24*60*60*1000)
  }
});

var Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
