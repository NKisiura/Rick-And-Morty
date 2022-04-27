import {CharacterInterface} from "../../global/types/character.interface";

export interface GetCharacterListResponseInterface {
  info: {
    count: number,
    pages: number,
    prev: string | null
    next: string | null
  },
  results: CharacterInterface[]
}
