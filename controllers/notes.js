const Note = require("../models/Notes");

// Getting all notes
const getAllNotes = async (req, res) => {
  const allNotes = await Note.find({});
  res.status(200).json({ allNotes, total: allNotes.length });
};
// Creating note
const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(200).json({ note });
  } catch (error) {
    throw error;
  }
};
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
