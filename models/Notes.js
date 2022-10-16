const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must provide a title"],
    trim: true,
    maxlength: [20, "character length must not exceed 20 characters"],
  },
  content: {
    type: String,
    required: false,
    maxlength: [200, "character length must not exceed 200 characters"],
  },
});

module.exports = mongoose.model("Note", NoteSchema);
