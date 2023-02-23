import { Router } from "express";
import { getCharacterByNameController, putCharacterController, deleteCharacterByIdController } from "../../controllers/character/index";
import { getCharacterByIdController } from "../../controllers/character/index";


export const characterRouter = Router();


characterRouter.get("/name/:name", getCharacterByNameController);
characterRouter.get("/id/:id", getCharacterByIdController);
characterRouter.put("/", putCharacterController);
characterRouter.put("/id/delete/:id", deleteCharacterByIdController);