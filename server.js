const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

const harrowData = require("./client/data/Harrow.json");
const heathrowData = require("./client/data/Heathrow.json");
const stratfordData = require("./client/data/Stratford.json");
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "/build")));
// app.use(express.static("/static"));
// console.log(__dirname+"/client/john");

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build", "john.js"));
});
// app.get("*", (_, res) => {
//   return res.sendFile(path.join(__dirname, "/client/build/static"));
// });

app.get("/district", (req, res) => {
  const allDistricts = {
    "harrow": harrowData,
    "heathrow": heathrowData,
    "stratford": stratfordData,
  };
  const district = req.query.place;
  if (district) {
    res.json(allDistricts[district]);
  }
});

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
