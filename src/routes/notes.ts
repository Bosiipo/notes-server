import express from "express";
import validateBody from "../middleware/validateBody";
import { noteSchema } from "../schema";
import Note from "../models/Note.model";
import { Request, Response } from "express";

const router = express.Router();

router.post(
  "/",
  validateBody(noteSchema),
  async (req: Request, res: Response) => {
    const { title, content } = req.body;
    const note = await Note.create({ title, content });
    return res.status(201).json({
      status: true,
      data: note,
    });
  }
);

router.get("/", async (req: Request, res: Response) => {
  const notes = await Note.find();

  return res.status(200).json({
    status: true,
    message: "Notes fetched successfully",
    data: notes,
  });
});

router.delete("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const note = await Note.findByIdAndDelete(noteId);
  if (!note)
    return res.status(404).json({
      status: false,
      message: "Note not found",
      data: null,
    });

  return res.status(200).json({
    status: true,
    message: "Note deleted successfully",
  });
});

export default router;
