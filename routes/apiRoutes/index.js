const router = require("express").Router();
const { newNote, deleteNote } = require("../../lib/notes.js");
let notes = require("../../db/db.json");

router.get("/notes", (req, res) => {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  const note = newNote(req.body, notes);
  res.json(note);
});

router.delete("/notes/:id", (req, res) => {
  notes = deleteNote(req.params.id, notes);

  res.json(notes);
});

module.exports = router;
