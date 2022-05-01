import {CharacterListStateInterface} from "../types/character-list-state.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {
  getCharacterListAction,
  getCharacterListFailureAction,
  getCharacterListSuccessAction
} from "./get-character-list.action";

const initialState: CharacterListStateInterface = {
  isLoading: false,
  data: null,
  error: null
}

const characterListReducer = createReducer(
  initialState,
  on(
    getCharacterListAction,
    (state): CharacterListStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getCharacterListSuccessAction,
    (state, action): CharacterListStateInterface => ({
      ...state,
      isLoading: false,
      data: action.characterList
    })
  ),
  on(
    getCharacterListFailureAction,
    (state, action): CharacterListStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error
    })
  )
);

export function reducers(state: CharacterListStateInterface, action: Action) {
  return characterListReducer(state, action);
}
