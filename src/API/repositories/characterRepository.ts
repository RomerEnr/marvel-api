import { Character, CharacterModel } from "../models/Character";

export interface CharacterRepository {
  findAll(): Promise<CharacterModel[]>;
  findById(id: string): Promise<CharacterModel | null>;
  finByName(name: string): Promise<CharacterModel | null>;
  userExists(name: string): Promise<boolean>;
  createCharacter(character: typeof Character): Promise<CharacterModel>;
  updateCharacter(id: string, character: typeof Character): Promise<CharacterModel | null>;
  deleteCharacter(id: string): Promise<CharacterModel | null>;
}

export class CharacterRepositoryImpl implements CharacterRepository {

  public async findAll(): Promise<CharacterModel[]> {
    return await Character.find();
  }

  public async findById(id: string): Promise<CharacterModel | null> {
    const character = await Character.findById(id);
    return character;
  }
	
  public async finByName(name: string): Promise<CharacterModel | null> {
    const character = Character.findOne({ name });
    return character;
  }

  public async createCharacter(character: typeof Character): Promise<CharacterModel> {
    return await Character.create(character);
  }

  public async updateCharacter(id: string, character: typeof Character): Promise<CharacterModel | null> {
    return Character.findByIdAndUpdate(id, character, { new: true });
  }

  public async deleteCharacter(id: string): Promise<CharacterModel | null> {
    return Character.findByIdAndDelete(id);
  }

  public async userExists(name: string): Promise<boolean> {
    const character = await Character.findOne({ name });
    return character !== null;
  }
}