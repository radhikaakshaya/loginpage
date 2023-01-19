const express=require('express');
const Router=express.Router();
const userService=require('../Services/userService');

Router.post('/login',userService.userLogin);
Router.post('/register',userService.userSignup)
module.exports=Router