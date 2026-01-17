import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/routes.js";
import connectDB from "./config/db.js";
import { createAdminIfMissing } from "./config/createAdmin.js";

dotenv.config();
connectDB().then(() => { 
    createAdminIfMissing(); 
});

const app = express();



app.use(cors());
app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
