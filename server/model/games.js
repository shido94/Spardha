const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const Games = new Schema({
  type: String,
  name: String,
  captainId: [{type: Schema.Types.ObjectId, ref: 'register' }],
  max_team: Number,
  max_player_year: Number,
  max_player : Number,
  min_player: Number
});

module.exports = mongoose.model('game', Games);


