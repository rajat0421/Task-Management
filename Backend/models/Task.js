const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true, // This makes the title field mandatory
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    dueDate: {
      type: Date,
    },
  });
  
module.exports = mongoose.model('Task', TaskSchema);
