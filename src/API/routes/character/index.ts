import { Router } from "express";
import { createCharacterController } from "../../controllers/character/index";


export const characterRouter = Router();


characterRouter.get("/");
characterRouter.put("/", createCharacterController);