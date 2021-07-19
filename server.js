// Import dependencies 
const express = require('express');
const mongoose = require('mongoose');
const logger = require("morgan");

// Import routes
const routes = require('./controllers')

// Sets up express 
const PORT = process.env.PORT || 3000;
const app = express()

// Sets up morgan logs
app.use(logger("dev"));

// Sets up data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files and use routes
app.use(express.static("public"));
app.use(routes)

// Connects to mongoose database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false });

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})