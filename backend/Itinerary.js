let mongoose = require('mongoose');

let itinerarySchema = new mongoose.Schema({
  title: String,
  profilePicture: String,
  rating: Number,
  duration: Number,
  price: Number,
  hashtags: []
})

module.exports = mongoose.model('itineraries', itinerarySchema);
