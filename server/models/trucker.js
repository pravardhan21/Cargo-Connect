const mongoose = require('mongoose');

const TruckerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  truck_number: {
    type: String,
    required: true,
  },
  price_per_km: {
    type: Number,
    required: false,
  },
  destination: {
    type: String,
    required: false,
  },
  current:{
    type:String,
    required:false,
  },
  interested:{
    type:Array,
    required:true
  }
  
});

module.exports = mongoose.model('Trucker', TruckerSchema);
