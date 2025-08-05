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
    await newNote.save();
    res.status(201).json({message:"Note created sucessfully"})
  } catch (error) {
    console.log("Error in createNote controllers",error)
    res.status(500).json({message:"Internal server error"})
  }
    
}

async function updateNote(req, res) {
    try {
      const {tittle,content}=req.body
      const updateNote = await Note.findByIdAndUpdate(req.params.id,{tittle,content})
      res.status(201).json({message:"Note Update sucessfully"})

    } catch (error) {
    console.log("Error in updateNote controllers",error)
    res.status(500).json({message:"Internal server error from update"})
    }
}


async function deleteNote(req, res) {
    try {
      const {tittle,content}=req.body
      const deleteNote= await Note.findOneAndDelete(req.params.id,{tittle,content})
      res.status(200).json({ message: "Your note is deleted successfully" });
    } catch (error) {
      console.log("Error in delete controllers",error)
      res.status(500).json({message:"Internal server error from delete"})
    }
}

module.exports = {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote
};