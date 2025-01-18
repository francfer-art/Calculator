const express = require("express");
const port = 4000;

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html")
})

app.get("/calculator2", (req, res) => {
  res.sendFile(__dirname + "/html/calculator2.html")
})

app.get("/calculator3", (req, res) => {
  res.sendFile(__dirname + "/html/calculator3.html")
})

app.get("/calculator4", (req, res) => {
  res.sendFile(__dirname + "/html/calculator4.html")
})

app.get("/calculator5", (req, res) => {
  res.sendFile(__dirname + "/html/calculator5.html")
})

app.get("/opinion", (req,res) => {
  res.sendFile(__dirname + "/html/opinion.html");
})

app.post("/gracias", (req,res) => {
  let opcion = req.body.design;
  let nombre = req.body.nombre;
  let mail = req.body.mail;
  res.send(`Datos Recibidos Correctamente: <br> Nombre: ${nombre}  <br> Email: ${mail} <br>  Opcion: ${opcion}`);
})


app.listen(port, () => {
  console.log(`Corriendo por el puerto ${port}`);
})
