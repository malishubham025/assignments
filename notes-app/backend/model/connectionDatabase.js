const mongoose=require("mongoose");
require("dotenv").config(); 
mongoose.connect(`mongodb+srv://${process.env.mongo_user}:${process.env.mongo_pass}@cluster0.dg2pe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then((res)=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})
module.exports=mongoose;