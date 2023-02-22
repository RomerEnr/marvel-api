import { Request, Response } from "express";
import { CharacterRepositoryImpl } from "../../repositories/characterRepository";
import { findCharacters } from "../../../service/character";

export const findCharactersController = async(req: Request, res: Response) =>{
  const characterRepository = new CharacterRepositoryImpl();
  const characters = await findCharacters(characterRepository);
  return res.status(200).json(characters);
};