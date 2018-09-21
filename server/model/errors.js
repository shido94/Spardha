const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const Errors = new Schema({
  type: String,
});

module.exports = mongoose.model('error', Errors);
