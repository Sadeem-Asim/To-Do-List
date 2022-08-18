const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const https = require("https");
const app = express();
const items = ["Buy Food", "Cook Food", "Eat Food"];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("index", { kindOfDay: day, newItem: items });
});

app.post("/", function (req, res) {
  const inputs = req.body.input1;
  const button = req.body.add;
  console.log(button);
  items.push(inputs);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
