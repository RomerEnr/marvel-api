import { Router } from "express";
import { putCharacterController } from "../../controllers/character/index";
import { getCharacterByIdController } from "../../controllers/character/index";


export const characterRouter = Router();


characterRouter.get("/:id", getCharacterByIdController);
characterRouter.put("/", putCharacterController);