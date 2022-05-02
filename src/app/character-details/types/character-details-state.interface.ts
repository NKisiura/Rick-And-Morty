import {CharacterInterface} from "../../global/types/character.interface";
import {BackendErrorInterface} from "../../global/types/backend-error.interface";

export interface CharacterDetailsStateInterface {
  isLoading: boolean,
  data: CharacterInterface | null,
  error: BackendErrorInterface | null
}
