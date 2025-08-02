export function getAllNotes(req,res){
    res.status(200).json("you got 5 notes")
}
export function createNote(req,res){
   res.status(201).json({message:"Note is created sucessfully"})
}
export function updateNote(req,res){
     res.status(200).json({message:"Note is update sucessfully"})
}
export function deleteNote(req,res){
res.status(200).json({message:"you note is delete sucessfully"})
}