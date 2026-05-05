import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import askRoutes from "./routes/askRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

// get current directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// load .env from root
dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});


const app = express();

app.use(cors());
app.use(express.json());
console.log("ENV KEY:", process.env.GEMINI_API_KEY);
app.use("/api", askRoutes);
console.log("API routes initialized");
app.listen(3000, () => {
  console.log("Server running on port 3000");
});