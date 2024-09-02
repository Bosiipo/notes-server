import mongoose, { Schema } from "mongoose";

const NoteSchema = new Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    createdAt: {
      type: Date,
    },
    deletedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("notes", NoteSchema);

export default Note;
