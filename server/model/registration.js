const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const Registration = new Schema({
  role: {type: String, default: 'captain'},
  type: {type: String, default: 'team'},
  name: String,
  branch: String,
  gender: String,
  uniqueId : String,
  year: String,
  phone: String,
  libId: String,
  game: String,
  payment_status: [{type: Schema.Types.ObjectId, ref: 'payment' }],
  team: [{
    branch: String,
    name: String,
    year: String,
    gender: String,
    libId: String,
  }]
});

module.exports = mongoose.model('register', Registration);
