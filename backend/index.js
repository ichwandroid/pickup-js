import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ScanRoute from "./routes/ScanRoute.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(ScanRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("Server sudah siap .....");
});
