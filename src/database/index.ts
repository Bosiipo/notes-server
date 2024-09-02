import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const { DATABASE_URL } = process.env;

export default async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Successfully connected to mongo database!");
  } catch (ex) {
    console.log(ex);
  }
};
