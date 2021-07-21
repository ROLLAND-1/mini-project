const express = require('express');
const serviceRouter = express.Router();


module.exports = serviceRouter.use('',(req,res,next)=>{
    res.render('service.ejs');
});