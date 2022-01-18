const express = require("express");
const app = express();
const data = require("../../data/Stratford.json")
app.use(express.json());

// app.get

// console.log(data);

const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});