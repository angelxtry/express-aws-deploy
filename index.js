const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello aws & express");
});

app.listen(5000, () => {
  console.log("server on 5000");
});
