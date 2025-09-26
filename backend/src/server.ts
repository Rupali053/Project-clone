import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db";
import entryRoutes from "./routes/entryRoutes";

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Database
connectDB();

// Routes
app.use("/api/entries", entryRoutes);

app.get("/", (_req, res) => {
  res.send("🚀 Backend is running...");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
