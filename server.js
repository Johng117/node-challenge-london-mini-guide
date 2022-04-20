const express = require("express");
const app = express();
const PORT = 5000;
const data = require("./Stratford.json");
app.use(express.json());

app.get("/", (req, res) => {
  res.json(data);
});

const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
