const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const Payment = new Schema({
  ORDERID: String,
  TXNAMOUNT: String,
  STATUS: String,
  REGISTRATION_ID: String,
  paid_status: String,
  updateTime: {type: Date, default: Date.now}
});

module.exports = mongoose.model('payment', Payment);
