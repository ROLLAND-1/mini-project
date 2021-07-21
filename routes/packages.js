const express = require('express');
const packageRouter = express.Router();


module.exports = packageRouter.use('',(req,res,next)=>{
    res.render('package.ejs');
});