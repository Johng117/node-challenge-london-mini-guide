const express = require("express");
const cors = require("cors");
const app = express();
const harrowData = require("./data/Harrow.json");
const heathrowData = require("./data/Heathrow.json");
const stratfordData = require("./data/Stratford.json");
app.use(cors());
app.use(express.json());

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
