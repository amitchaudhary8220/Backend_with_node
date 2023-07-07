const mongoose = require("mongoose");
//with validation
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Name cann't be empty"],
    maxlength: [20, "maximum character could be 20"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//model is copy of schema , it is created to perform operation on collection , for every collection(table ) , there would be a modal 
const TaskModal = mongoose.model("Task", taskSchema);

module.exports = TaskModal;
