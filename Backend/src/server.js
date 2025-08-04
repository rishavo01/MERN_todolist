const express =require("express")
const notesRouters = require("./routes/notesRoutes")
const connectDB = require("./config/db")
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use("/api/notes",notesRouters)
connectDB();

//middleware
app.use(express.json());

const PORT = process.env.PORT || 3000;



app.listen(PORT,()=>{
    console.log("The sever is running on PORT ",PORT)
}) 

//mongodb+srv://rishav690999:ROEVcCm4g19wC1gB@cluster0.cacgprk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0