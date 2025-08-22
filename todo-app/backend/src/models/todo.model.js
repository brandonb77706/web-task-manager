// In your backend Todo model file
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    dueDate: Date,
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Todo", todoSchema);
