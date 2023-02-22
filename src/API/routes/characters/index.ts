import { Router } from "express";
import { findCharactersController } from "../../controllers/characters";

export const charactersRouter = Router();
charactersRouter.get("/", findCharactersController);
