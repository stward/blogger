var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  name: String,
  content: String
});

module.exports = mongoose.model('Post', PostSchema);
