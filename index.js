//librerias externas
require("dotenv").config();
const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const debug = require('debug')('myapp');
const morgan = require("morgan");


//modulos internos
const { readFile } = require("./src/files.js");
const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "My App";
const FILE_NAME = "./db/products.json";
process.env.DEBUG = '*';


app.use(morgan("dev"));
app.set("views", "./src/views");
app.set("view engine", "ejs");

//RUTA /products
app.get("/products", (req, res) => {
  const data = readFile(FILE_NAME);
  console.log(data);
  //debug para mostrar en consola
  debug('Data', data);

  res.render("index", { products: data });
});

app.listen(
  PORT,
  () => console.log(`${APP_NAME} is running on http://localhost:${PORT}`)
);
