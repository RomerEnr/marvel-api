import { Character, CharacterModel } from "../../API/models/Character";
import { CharacterRepository } from "../../API/repositories/characterRepository";

export const createCharacter = async(CharacterRepository: CharacterRepository, character: typeof Character): Promise<CharacterModel> => {
  const newCharacter = await CharacterRepository.createCharacter(character);
  return newCharacter;
};

export const findCharacterById = async(CharacterRepository: CharacterRepository, id: string): Promise<CharacterModel | null> => {
  const character = await CharacterRepository.findById(id);
  return character;
};

export const findCharacterByName = async(CharacterRepository: CharacterRepository, name: string): Promise<CharacterModel | null> => {
  const character = await CharacterRepository.findByName(name);
  return character;
};