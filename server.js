const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const movieRouter = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 5000;

if (app.get("env") === "development") {
    require("dotenv").config();
}

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    // const path = require("path");
    // app.get("*"),(req,res)=>{
    //     res.sendFile(path.resolve(_dirname,'client','build','index.html'));
    // }
}

db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Add routes
app.use("/api", movieRouter);

app.listen(PORT, () => console.log(`🌎 ==> Server running on port ${PORT}`));