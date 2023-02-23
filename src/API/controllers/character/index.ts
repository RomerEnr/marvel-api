import { Request, Response } from "express";
import { CharacterRepositoryImpl } from "../../repositories/characterRepository";
import { createCharacter, findCharacterById, findCharacterByName } from "../../../service/character";


export const putCharacterController = async(req: Request, res: Response) =>{
  const characterRepository = new CharacterRepositoryImpl();
  if (!req.body.name || !req.body.description || !req.body.universe || !req.body.realName){
    return res.status(400).json({ message: "Missing required fields" });
  }

  const character = await createCharacter(characterRepository, req.body);
  return res.status(200).json(character);
};

export const getCharacterByIdController = async(req: Request, res: Response) =>{
  const characterRepository = new CharacterRepositoryImpl();
  const character = await findCharacterById(characterRepository, req.params.id);
  if (!character){
    return res.status(404).json({ message: "Character not found" });
  }
  return res.status(200).json(character);
};

export const getCharacterByNameController = async(req: Request, res: Response) => {
  const characterRepository = new CharacterRepositoryImpl();
  const { name } = req.params;
  console.log(name);
  const character = await findCharacterByName(characterRepository, name);
  if (!character){
    return res.status(404).json({ message: "Character not found" });
  }
  return res.status(200).json(character); 
};