const fs = require("fs");
const path = require("path");
const { nanoid } = require("nanoid");

// create new note
function newNote(body, notes) {
  const note = body;
  note.id = nanoid();
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notes, null, 2)
  );
  return note;
}

// delete note
function deleteNote(id, replacedArray) {
  replacedArray = replacedArray.filter(note => note.id !== id);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(replacedArray, null, 2)
  );
  return replacedArray;
}

module.exports = {
  newNote,
  deleteNote,
};
