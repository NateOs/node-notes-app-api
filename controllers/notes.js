const Note = require("../models/Notes");

// Getting all notes
const getAllNotes = async (req, res) => {
  const allNotes = await Note.find({});
  res.status(200).json({ allNotes, total: allNotes.length });
};

const createNote = () => {};
const getNote = () => {};
const deleteNote = () => {};
const updateNote = () => {};

module.exports = {
  getAllNotes,
  createNote,
  getNote,
  deleteNote,
  updateNote,
};
