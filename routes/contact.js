const express = require('express');
const contactRouter = express.Router();


module.exports = contactRouter.use('',(req,res,next)=>{
    res.render('contact.ejs');
});