import { Request, Response } from "express";
import { CharacterRepositoryImpl } from "../../repositories/characterRepository";
import { createCharacter } from "../../../service/character";

export const createCharacterController = async(req: Request, res: Response) =>{
  const characterRepository = new CharacterRepositoryImpl();
  if (!req.body.name || !req.body.description || !req.body.universe || !req.body.realName){
    return res.status(400).json({ message: "Missing required fields" });
  }

  const character = await createCharacter(characterRepository, req.body);
  return res.status(200).json(character);
}; 