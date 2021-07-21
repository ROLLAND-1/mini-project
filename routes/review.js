const express = require('express');
const reviewRouter = express.Router();


module.exports = reviewRouter.use('',(req,res,next)=>{
    res.render('review.ejs');
});