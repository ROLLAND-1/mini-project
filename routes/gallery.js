const express = require('express');
const galleryRouter = express.Router();


module.exports = galleryRouter.use('',(req,res,next)=>{
    res.render('gallery.ejs');
});