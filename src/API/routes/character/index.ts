import { Router } from "express";
import { getCharacterByNameController, putCharacterController } from "../../controllers/character/index";
import { getCharacterByIdController } from "../../controllers/character/index";


export const characterRouter = Router();


characterRouter.get("/:id", getCharacterByIdController);
characterRouter.get("/:name", getCharacterByNameController);
characterRouter.put("/", putCharacterController);