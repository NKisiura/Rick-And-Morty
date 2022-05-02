import {CharacterDetailsStateInterface} from "../types/character-details-state.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {
  getSingleCharacterAction,
  getSingleCharacterFailureAction,
  getSingleCharacterSuccessAction
} from "./character-details.action";
import {routerNavigationAction} from "@ngrx/router-store";

const initialState: CharacterDetailsStateInterface = {
  isLoading: false,
  data: null,
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
      data: action.character
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
  on(routerNavigationAction, (): CharacterDetailsStateInterface => initialState)
)

export function characterDetailsReducers(state: CharacterDetailsStateInterface, action: Action) {
  return characterDetailsReducer(state, action);
}
