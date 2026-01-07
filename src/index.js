require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

app.get("/health", (req, res) => { 
    res.json({ status: "ok" }); 
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
