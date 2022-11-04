const express = require("express");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

const {
  getAllNotes,
  createNote,
  getNote,
  deleteNote,
  updateNote,
  login,
  logout,
} = require("../controllers/notes");

// routes

router.route("/").get(authMiddleware, getAllNotes);
router.route("/").post(authMiddleware, createNote);
router.route("/:id").get(authMiddleware, getNote);
router.route("/:id").delete(authMiddleware, deleteNote);
router.route("/:id").patch(authMiddleware, updateNote);
router.route("/login").post(login);
router.route("/logout").post(logout);

module.exports = router;
