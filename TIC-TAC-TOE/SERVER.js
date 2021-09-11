const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.set("views", path.join(__dirname, ""));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render('GAME');
});

app.listen(7000, () => {
  console.log('Server Running on 7000');
});
