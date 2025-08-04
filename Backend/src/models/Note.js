const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    tittle:{
        type:String,
        require:true
    },
    content:{
        type:{
            type:String,
            require:true
        },
    }
},
{timestamps:true});

const Note = mongoose.model("Note",noteSchema)
module.exports= Note;