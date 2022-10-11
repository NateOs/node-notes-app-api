require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const notes = require("./routes/notes");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Welcome to your own node app");
});

app.use("/api/v1/notes", notes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, console.log("Note app listening on port " + port));
  } catch (err) {
    console.error(err);
  }
};

start();
