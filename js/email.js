const express = require("express");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(multer().array());

// Static folder
app.use(express.static(""));

app.post("/send", (req, res) => {
  console.log(req.params);
  console.log(req.query);

  const output = `
  <h3>Detalles del Contacto</h3>
    <ul>
        <li>Nombre: ${req.body.name}</li>
        <li>Email: ${req.body.name}</li>
    </ul>
  <h3>Mensaje</h3>
    <p>Comentario: ${req.body.comment}</p>
  
  `;
  console.log(req.body);
  res.status(200).send("OK...");
});
