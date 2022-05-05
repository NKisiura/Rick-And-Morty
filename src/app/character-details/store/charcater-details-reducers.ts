import {CharacterDetailsStateInterface} from "../types/character-details-state.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {
  getSingleCharacterAction,
  getSingleCharacterFailureAction,
  getSingleCharacterSuccessAction
} from "./actions/character-details.action";
import {routerNavigationAction} from "@ngrx/router-store";
import {
  getFirstEpisodeAction,
  getFirstEpisodeFailureAction,
  getFirstEpisodeSuccessAction
} from "./actions/first-episode.action";

const initialState: CharacterDetailsStateInterface = {
  isLoading: false,
  character: null,
  firstEpisode: null,
  error: null
}

const characterDetailsReducer = createReducer(
  initialState,
  on(
    getSingleCharacterAction,
    (state): CharacterDetailsStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getSingleCharacterSuccessAction,
    (state, action): CharacterDetailsStateInterface => ({
      ...state,
      isLoading: false,
      character: action.character
    })
  ),
  on(
    getSingleCharacterFailureAction,
    (state, action): CharacterDetailsStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error
    })
  ),
  on(
    getFirstEpisodeAction,
    (state): CharacterDetailsStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getFirstEpisodeSuccessAction,
    (state, action): CharacterDetailsStateInterface => ({
      ...state,
      isLoading: false,
      firstEpisode: action.firstEpisode
    })
  ),
  on(
    getFirstEpisodeFailureAction,
    (state, action): CharacterDetailsStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error
    })
  ),
  on(routerNavigationAction, (): CharacterDetailsStateInterface => initialState)
)

export function characterDetailsReducers(state: CharacterDetailsStateInterface, action: Action) {
  return characterDetailsReducer(state, action);
}
