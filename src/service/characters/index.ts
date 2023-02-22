import { CharacterModel } from "../../API/models/Character";
import { CharacterRepository } from "../../API/repositories/characterRepository";

export const findCharacters = async(CharacterRepository: CharacterRepository): Promise<CharacterModel[]> => {
  const characters = await CharacterRepository.findAll();
  return characters;
};