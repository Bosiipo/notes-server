"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateBody_1 = __importDefault(require("../middleware/validateBody"));
const schema_1 = require("../schema");
const Note_model_1 = __importDefault(require("../models/Note.model"));
const router = express_1.default.Router();
// type CreateNote = {
//   title?: string;
//   content?: string;
// };
router.post("/", (0, validateBody_1.default)(schema_1.noteSchema), async (req, res) => {
    const { title, content } = req.body;
    const note = await Note_model_1.default.create({ title, content });
    return res.status(201).json({
        status: true,
        data: note,
    });
});
router.get("/:noteId", async (req, res) => {
    const noteId = req.params.noteId;
    const note = await Note_model_1.default.findById(noteId);
    if (!note)
        return res.status(404).json({
            status: false,
            message: "Note not found",
            data: null,
        });
    return res.status(200).json({
        status: true,
        message: "Note fetched successfully",
        data: note,
    });
});
router.delete("/:noteId", async (req, res) => {
    const noteId = req.params.noteId;
    const note = await Note_model_1.default.findByIdAndDelete(noteId);
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
exports.default = router;
//# sourceMappingURL=notes.js.map