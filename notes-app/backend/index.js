const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const userRouter=require("./controller/userRoutes");
const NotesRouter=require("./controller/notesRoutes");
const cors=require("cors");

app.use(cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    credentials: true // Allow cookies
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.send("hi");
})
app.use("/user",userRouter);
app.use("/note",NotesRouter);

app.listen(5000,()=>{
    console.log("listning");
})