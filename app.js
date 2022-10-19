require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connectDB = require("./db/connect");
const notesRouter = require("./routes/notes");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

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
    console.error("Failed to connect:", err);
  }
};

// extra middleware, placed here so that it runs
app.use(notFoundMiddleware);
app.use(errorMiddleware);

start();
