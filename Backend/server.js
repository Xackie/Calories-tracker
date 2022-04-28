const express=require("express");
const app=express();
const cors=require("cors");
const path=require("path");
const { default: mongoose } = require("mongoose");
require('dotenv').config()

const bodyParser=require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port=process.env.PORT || 8888;

app.use(bodyParser.json());
app.use(cors());

// sending Access-Control-Allow-Origin request to sort the cors problems
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


//Mongoose connection
const ATLAS_URI=process.env.ATLAS_URI;
mongoose.connect(ATLAS_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
const connection=mongoose.connection;
// console.log(ATLAS_URI);
connection.once('open',()=>{
    console.log("mongodb connected");
})

const mealsRouter=require('./routes/meals');
app.use('/meals',mealsRouter);
 
// app.get("/",(req,res) => res.send("Response from the GET request"));
app.use(express.static(path.join('/meals', 'build')));
    
    app.get('/', function (req, res) {
      res.sendFile(path.join('/meals', 'build', 'index.html'));
    });
    
app.listen(port,()=>{
    console.log("App is listening to port:",{port})
});
