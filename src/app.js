require("dotenv").config();

const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Rotas
const newsRoute = require("./routes/news");

app.use("/news", newsRoute);

module.exports = app;
