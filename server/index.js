require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const path = require("path");
const users = require("./controllers/users");
const workouts = require("./controllers/workouts");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000; // Use environment variable for the port

// MongoDB connection
mongoose
  .connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB", error));

const db = mongoose.connection;

// Middleware setup
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*", // Use your frontend URL here
    methods: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req, res) => {
  res.send("Server was accessed");
});

app.use("/api/v1/workouts", workouts);
app.use("/api/v1/users", users);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Error handling for MongoDB
db.on("error", (error) => {
  console.log(error);
});

db.once("connected", () => {
  console.log("Connected to MongoDB");
});
