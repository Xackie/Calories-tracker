require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const path = require("path");
const port = process.env.PORT || 8888;
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin:"http://localhost:3000",
  // methods: ["GET","POST","DELETE",]

}));

// sending Access-Control-Allow-Origin request to sort the cors problems
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

//Mongoose connection
const  DB_Connection= process.env.ATLAS_URI;
mongoose.connect(DB_Connection, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).catch((error) => console.error(error));
console.log(DB_Connection);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb connected");
});

const mealsRouter = require("./routes/meals");
app.use("/meals", mealsRouter);

app.get("/", (req, res) => res.send("Response from the GET request"));

app.listen(port, () => {
  console.log("App is listening to port:", { port });
});
