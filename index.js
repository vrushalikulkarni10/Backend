// const express = require('express');
//     const app = express();

//     app.get('/',function(req,res){
//         res.send("hello word");
//     })

//     app.listen(3000,()=>{
//     console.log("server is runnig on port 3000");
// })
const express = require("express");
const app = express();
const body = require("body-parser");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const db = require("./db.config");

//create table if not exists
db.Sequelize.sync();

const controller = require("./customer.controller");

app.get("/", function (req, res) {
  res.send("hello world");
});

//create a new customer
app.post("/customers/new", function (req, res) {
  controller.createCustomer(req, res);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
