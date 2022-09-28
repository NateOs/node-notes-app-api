const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "Welcome to your own node app",
    );
});

app.listen(
  port,
  console.log(
    "Note app listening on port " +
      port,
  ),
);
