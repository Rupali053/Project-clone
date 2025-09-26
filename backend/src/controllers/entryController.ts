import { Request, Response } from "express";
import Entry from "../models/Entry";

export const createEntry = async (req: Request, res: Response) => {
  try {
    const entry = await Entry.create(req.body);
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ error: "Error creating entry", details: error });
  }
};

export const getEntries = async (_req: Request, res: Response) => {
  try {
    const entries = await Entry.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: "Error fetching entries" });
  }
};
