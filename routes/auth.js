const express = require('express');
const usersModel = require('../model/users.model');
const authRouter = express.Router();


const signUp = authRouter.use('/signup',(req,res,next)=>{
    res.render('signupPage.ejs');
});

const login = authRouter.use('/login',async (req, res) => {
    console.log(req.body)
   const {email, password} = req.body;
   
   // console.log('post req is working')
   try {
      const user = await usersModel.login(email,password)
      req.session.user = {
          email:user.email
      }
      console.log('user: ',user)
      res.json({success:{msg:'logged in'}})
   } catch (error) {
       res.status(400).json(
           {
               error: error,
               failure:{msg:'incorrect email or password'}})
   }
  
  });

module.exports = {
    signUp,
    login
}
