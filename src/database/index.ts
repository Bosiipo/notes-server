import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set.");
}

export default async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Successfully connected to mongo database!");
  } catch (ex) {
    console.log(ex);
  }
};
