//Linking the data

// const { error } = require('console');
const fs = require("fs");
const router = require("express").Router();

const {
  getNotes,
  addNote,
  deleteNote,
} = require("../controllers/notes.controller");

// Here I have extracted the funtionality to a controllers file

//Creating the routing data
router.get("/notes", (req, res) => getNotes(req, res));

//Getting the post request
router.post("/notes", (req, res) => addNote(req, res));

//Creating an api delete request
router.delete("/notes/:id", (req, res) => deleteNote(req, res));

module.exports = router;
