// import { Router, Request, Response } from "express";
// import Entry from "../models/Entry";

// const router = Router();

// // Save new entry
// router.post("/", async (req: Request, res: Response) => {
//   try {
//     const entry = new Entry(req.body);
//     await entry.save();
//     res.status(201).json({ message: "✅ Entry created", entry });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to create entry" });
//   }
// });

// // Get all entries
// router.get("/", async (_req: Request, res: Response) => {
//   try {
//     const entries = await Entry.find();
//     res.json(entries);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch entries" });
//   }
// });

// export default router;






import express from "express";
import Entry from "../models/Entry";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("📩 Incoming data:", req.body); // Debug frontend data
    const entry = new Entry(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (err: any) {
    console.error("❌ Error saving entry:", err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;
