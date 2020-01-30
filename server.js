const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/usersdb";
const PORT = process.env.PORT || 3000;

const app = express();
let db;
// считьіваем паблuк файльі
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json());

app.get("/", function(request, response) {
    response.sendfile("public/views/index.html");
});

//отправка формьі
app.post("/", function(request, response) {
    db.collection("cloudUsers").insertOne(request.body, function(err, result) {
        if (err) {
            console.log(err);
            return response.sendStatus(500);
        }
        response.send("Hello " + request.body.login);
    });
});

//слушаем подключение на 3000 порту

MongoClient.connect("mongodb://localhost:27017/cloudUsers", { useNewUrlParser: true }, function(
  err,
  database
) {
  if (err) {
    return console.log(err);
  }
  db = database.db('cloudUsers');
app.listen(PORT, function() {
    console.log("We work on " + PORT + " port");
});
});
