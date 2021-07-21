const express = require('express');
const bookRouter = express.Router();


module.exports = bookRouter.use('',(req,res,next)=>{
    res.render('book.ejs');
});