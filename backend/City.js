let mongoose = require('mongoose');

let citiesSchema = new mongoose.Schema({
  name: String,
  country: String,
  url: String
})

module.exports = mongoose.model('cities', citiesSchema);
