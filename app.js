const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

//se establece como view engine hbs
app.set("view engine", "hbs");

//definimos los parciales
hbs.registerPartials(__dirname + "/views/layouts", function (err) {});

//le indica que la carpeta publica tendra contenido static
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Andres",
    titulo: "Curso de node | Home",
  });
});

//resolver rutas
app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Andres",
    titulo: "Curso de node | Generic",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Andres",
    titulo: "Curso de node | Elements",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

// app.get("/", (req, res) => {
//   res.send("Index");
// });

// app.get("/hola-mundo", (req, res) => {
//   res.send("Hola mundo");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
