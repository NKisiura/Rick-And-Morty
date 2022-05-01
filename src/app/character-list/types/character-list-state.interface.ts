import {GetCharacterListResponseInterface} from "./get-character-list-response.interface";
import {BackendErrorInterface} from "../../global/types/backend-error.interface";

export interface CharacterListStateInterface {
  isLoading: boolean,
  data: GetCharacterListResponseInterface | null,
  error: BackendErrorInterface | null
}
