const express = require('express')
const path = require('path')



const app = express();
app.set(
    "views",path.join(__dirname,'views')
)

app.use(express.static(path.join(__dirname,'views')))
app.set(
    "view engine","ejs"
)


app.get("/book",(req,res)=>{
    res.render('book.ejs');
})


app.get("/packages",(req,res)=>{
    res.render('packages.ejs');
})


app.get("/services",(req,res)=>{
    res.render('services.ejs');
})


app.get("/gallery",(req,res)=>{
    res.render('gallery.ejs');
})


app.get("/review",(req,res)=>{
    res.render('review.ejs');
})


app.get("/contact",(req,res)=>{
    res.render('contact.ejs');
})

app.get("/",(req,res)=>{
    res.render('index.ejs');
})

app.listen(8080)