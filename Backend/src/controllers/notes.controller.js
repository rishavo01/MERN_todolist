const Note = require("../models/Note.js");

async function getAllNotes(req, res) {
    try {
      const notes=await Note.find()
      res.status(200).json(notes)
    } catch (error) {
      console.log("Error in getAllNotes controllers",error)
      res.status(500).json({message:"Internal server error"})
    }
}

async function createNote(req, res) {
  try {
    const {tittle,content}=req.body
    const newNote =new Note({tittle,content})
    
    res.status(201).json({message:"Note created sucessfully"})
  } catch (error) {
    console.log("Error in createNote controllers",error)
    res.status(500).json({message:"Internal server error"})
  }
    
}

function updateNote(req, res) {
    res.status(200).json({ message: "Note is updated successfully" });
}

function deleteNote(req, res) {
    res.status(200).json({ message: "Your note is deleted successfully" });
}

module.exports = {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote
};
