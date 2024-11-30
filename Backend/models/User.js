const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true, // This makes the title field mandatory
    },
    password: {
      type: String,
      required: true,
    },
  });

module.exports = mongoose.model('User', UserSchema);