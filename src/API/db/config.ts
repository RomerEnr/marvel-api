import mongoose from "mongoose";

export const setMoongoseConfig = (): void => {
  mongoose.set("strictQuery", true);
};

