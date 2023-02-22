import { Character, CharacterModel } from "../../API/models/Character";
import { CharacterRepository } from "../../API/repositories/characterRepository";


export const findCharacters = async(CharacterRepository: CharacterRepository): Promise<CharacterModel[]> => {
  const characters = await CharacterRepository.findAll();
  return characters;
};

export const createCharacter = async(CharacterRepository: CharacterRepository, character: typeof Character): Promise<CharacterModel> => {
  const newCharacter = await CharacterRepository.createCharacter(character);
  return newCharacter;
};