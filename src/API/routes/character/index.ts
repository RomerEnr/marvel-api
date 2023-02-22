import { Router } from "express";
import { createCharacterController } from "../../controllers/character/index";


export const characterRouter = Router();


characterRouter.get("/", (req, res) => {
  res.send("Welcome to Marvel API! - Character");
});

characterRouter.put("/", createCharacterController);