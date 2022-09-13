const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const path =require('path');
require('dotenv/config');
// const router = express.Router();
const port =  8080;
 const Post= require('./models/schemaModel');




// Its a middle ware

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('veiw engine', 'ejs');


//Routes
app.get('/',  (req , res)=>
{
    // res.render('index');
    // res.sendFile(path.join(__dirname+ '/index.ejs'));
   
    res.send(`Hello , This is my first api working over port ${port}`);
});



app.post('/' , (req, res)=>
{   
const post=new Post({
firstName:req.body.firstName,
secondName:req.body.secondName,
email:req.body.email,
phoneNumber:req.body.phoneNumber
});

post.save()
.then(data=>{
    res.json(data);
})
// res.send(`Your username is ${req.body.firstName} ${req.body.secondName} && password is ${req.body.password} && phone number is ${req.body.phoneNo}`)
console.log(req.body);
})



//DataBase Connection
mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log('Connected to DataBase!')
})



//To listen on the port 
app.listen(port ,()=>{
    console.log(`Server started at http://localhost:${port}`)
});