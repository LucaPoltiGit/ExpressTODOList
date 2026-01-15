import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
