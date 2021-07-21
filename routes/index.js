const express = require('express');
const homeRouter = express.Router();


module.exports = homeRouter.use('',(req,res,next)=>{
    const loggedIn = req.session.user
    res.render('index.ejs',{loggedIn:loggedIn});
});