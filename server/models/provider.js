const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
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
  current: {
    type: String,
    required: false,
  },
  destination: {
    type: String,
    required: false,
  },
  cargosize:{
    type:Number,
    required:false
  }
});

module.exports = mongoose.model('Provider', ProviderSchema);
