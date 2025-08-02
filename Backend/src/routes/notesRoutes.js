const express = require("express");
const { getAllNotes, createNote, updateNote, deleteNote } = require("../controllers/notes.controller");
const router= express.Router();




router.get("/",getAllNotes)
router.post("/",createNote)
router.put("/:id",updateNote)
router.delete("/:id",deleteNote) 

module.exports=router