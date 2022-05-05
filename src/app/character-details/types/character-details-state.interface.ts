import {CharacterInterface} from "../../global/types/character.interface";
import {BackendErrorInterface} from "../../global/types/backend-error.interface";
import {EpisodeInterface} from "./episode.interface";

export interface CharacterDetailsStateInterface {
  isLoading: boolean,
  character: CharacterInterface | null,
  firstEpisode: EpisodeInterface | null,
  error: BackendErrorInterface | null
}
