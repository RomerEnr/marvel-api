import { Schema, Document, Model, model } from "mongoose";

const characterSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  universe: {
    type: String,
    required: true,
  },
  realName: {
    type: String,
    required: false,
  },
  powers: [String],
  origin: {
    type: String,
    enum: ["Natural", "Artificial", "Cosmic", "Mutant", "Other", "Unknown"],
    default: "Unknown",
  },
  created: {
    type: Date,
    default: Date.now,
  }
});

export interface CharacterModel extends Document {
  name: string;
  description: string;
  universe: string;
  realName: string;
  powers: string[];
  origin: string;
  created: Date;
}

export const Character: Model<CharacterModel> = model<CharacterModel>("Character", characterSchema);