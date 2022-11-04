const Note = require("../models/Notes");

// Getting all notes
const getAllNotes = async (req, res) => {
  const allNotes = await Note.find({});
  res.status(200).json({ allNotes, total: allNotes.length });
};
// Creating note
const createNote = async (req, res) => {
  const note = await Note.create(req.body);
  res.status(200).json({ note });
};

// Get a single note
const getNote = async (req, res) => {
  const { id: noteId } = req.params;

  const note = await Note.find({ _id: noteId });

  if (note.length === 0) {
    throw new Error(`Note not found`);
  }
  res.status(200).json(note);
};

// Deleting a note
const deleteNote = async (req, res) => {
  const { id: noteId } = req.params;

  const note = await Note.findOneAndDelete({ _id: noteId });

  if (!note) {
    throw new Error(`Note not found`);
  }

  res.status(200).json({ msg: "Note deleted successfully" });
};

// Update a note
const updateNote = async (req, res) => {
  const { id: noteId } = req.params;
  const note = await Note.findOneAndUpdate({ _id: noteId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ note, msg: "note updated successfully" });

  if (!note) {
    throw new Error("note not found");
  }
};

// Login a user
const login = async (req, res) => {
  const userInfo = req.body;
  await console.log(userInfo);
  res.send("login success");
};

// Logout a user
const logout = async (req, res) => {
  res.send("logout");
};

module.exports = {
  getAllNotes,
  createNote,
  getNote,
  deleteNote,
  updateNote,
  login,
  logout,
};
