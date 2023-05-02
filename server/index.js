require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const path = require("path");
const users = require("./controllers/users");
const workouts = require("./controllers/workouts");
const hostname = "127.0.0.1";
const app = express();

const port = 3000;

mongoose.connect(mongoString).catch((error) => {
    console.log(error);
});

const db = mongoose.connection;

app
    .use(express.json())
    .use(express.static(path.join(__dirname, "../client/dist")))
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
        next()
    });

app.get("/", (req, res) => {
    res.send("Server was accessed");
});
app
    .use("/api/v1/workouts", workouts)
    .use("/api/v1/users", users)

app
    .get("/api/v1/users", users) 
    .get("/api/v1/workouts", workouts)

app
    .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(port, () => {
    console.log(`Listening at http://${hostname}:${port}`);
});

db.on("error", (error) => {
    console.log(error);
});

db.once("connected", () => {
    console.log("Connected to MongoDB");
});





