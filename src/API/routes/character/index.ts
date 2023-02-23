import { Router } from "express";
import { getCharacterByNameController, putCharacterController } from "../../controllers/character/index";
import { getCharacterByIdController } from "../../controllers/character/index";


export const characterRouter = Router();


characterRouter.get("/name/:name", getCharacterByNameController);
characterRouter.get("/id/:id", getCharacterByIdController);
characterRouter.put("/", putCharacterController);