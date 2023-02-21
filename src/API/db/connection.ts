import mongoose from "mongoose";
import { setMoongoseConfig } from "./config";

const MONGO_URL = process.env.MONGO_URL;
setMoongoseConfig();
const connectDB = async(): Promise<void> => {
  try {
    if (!MONGO_URL) {
      throw new Error("No mongo url");
    } else {
      await mongoose.connect(MONGO_URL);
    }
    console.log("MongoDB Connected");
  } catch (error) {
		
  }
};

export const checkDB = async(): Promise<void> => {
  try {
    await mongoose.connection.db.admin().ping();
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Disconnected");
  }
};

export default connectDB;