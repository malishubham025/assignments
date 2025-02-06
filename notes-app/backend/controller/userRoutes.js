const express=require("express");
const userRouter=express.Router();
const { Login, Signup }=require("../model/Usermodel");

userRouter.post("/login",(req,res)=>{
    Login(req,res);
})
userRouter.post("/signup",(req,res)=>{
    Signup(req,res);
})
module.exports =userRouter;

