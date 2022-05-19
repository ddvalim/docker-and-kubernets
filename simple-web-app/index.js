const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Bye World!");
});

app.listen(7878, () => {
  console.log("Listening on port 7878");
});
