require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const notesRouter = require("./routes/notes");

const app = express();
app.use(express.json());

app.use("/api/v1/notes", notesRouter);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send("Welcome to your own node app");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, console.log("Note app listening on port " + port));
  } catch (err) {
    console.error(err);
  }
};

start();
