// Folder where the script is running
const PUBLIC_FOLDER = process.cwd();


const express = require("express");

// Create app
const app = express();

app.set("view engine", "ejs");
app.set("views", PUBLIC_FOLDER);

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/:filename.ejs", (req, res) => {
  res.render(req.params.filename);
});

// FIXME: Ignore .ejs files
app.use(express.static(PUBLIC_FOLDER));


module.exports = app;