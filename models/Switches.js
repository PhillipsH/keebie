const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Create Schema
const ItemSchema = new Schema({
  switchName: {
    type: String,
    required: true
  },
  switchType: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: false
  },
  color: {
    type: String,
    required: false
  },
  actuationDistance: {
    type: String,
    required: false
  },
  actuationForce: {
    type: String,
    required: false
  },
  img: {
    type: String,
    required: false
  }
});


module.exports = Switches = mongoose.model('switches', ItemSchema);
