import mongoose from "mongoose";
declare const Note: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title?: string | null | undefined;
    content?: string | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title?: string | null | undefined;
    content?: string | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title?: string | null | undefined;
    content?: string | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title?: string | null | undefined;
    content?: string | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title?: string | null | undefined;
    content?: string | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title?: string | null | undefined;
    content?: string | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default Note;
