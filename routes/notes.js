const express = require("express");

const router = express.Router();

const {
  getAllNotes,
  createNote,
  getNote,
  deleteNote,
  updateNote,
} = require("../controllers/notes");

// routes

router.route("/").get(getAllNotes);
router.route("/").post(createNote);
router.route("/:id").get(getNote);
router.route("/:id").delete(deleteNote);
router.route("/:id").get(updateNote);

module.exports = router;
