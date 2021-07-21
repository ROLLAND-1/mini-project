const express = require('express')
const path = require('path');
const session = require('express-session')
const app = express();
const mongoose = require('mongoose')
app.use(session({
    secret:'secret',
    name:'authSession',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:36000000
    }
}))

mongoose.connect('mongodb://localhost:27017',{useUnifiedTopology:true,useNewUrlParser:true,dbName:"APPDATA"})
.then(x=> console.log('connected')).catch(err=>console.log('not connected: error'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set(
    "views",path.join(__dirname,'views')
)

app.use(express.static(path.join(__dirname,'views')))
app.set(
    "view engine","ejs"
)


app.get("/book",require('./routes/book'))

app.get("/home",require('./routes/index'))


app.get("/packages",require('./routes/packages'))


app.get("/services",require('./routes/services'))


app.get("/gallery",require('./routes/gallery'))

app.get("/signup",require('./routes/auth').signUp)


app.get("/review",require('./routes/review'))


app.get("/contact",require('./routes/contact'))

app.get("/",require('./routes/index'));

app.post('/login',require('./routes/auth').login)
app.listen(8080)