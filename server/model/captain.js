const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const Captain = new Schema({
  libId: String,
  uniqueId: String,
  game: String
});

module.exports = mongoose.model('captain', Captain);
