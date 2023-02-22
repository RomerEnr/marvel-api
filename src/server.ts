import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { characterRouter } from "./API/routes/character";
import { charactersRouter } from "./API/routes/characters/index";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
  res.send("Welcome to Marvel API!");
});

app.use("/character", characterRouter);
app.use("/characters", charactersRouter);

export default app;