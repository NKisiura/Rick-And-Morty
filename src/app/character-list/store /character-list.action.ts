import {createAction, props} from "@ngrx/store";
import {CharacterListActionTypes} from "./character-list-action-types";
import {GetCharacterListResponseInterface} from "../types/get-character-list-response.interface";
import {BackendErrorInterface} from "../../global/types/backend-error.interface";

export const getCharacterListAction = createAction(
  CharacterListActionTypes.GET_CHARACTER_LIST,
  props<{url: string}>()
);

export const getCharacterListSuccessAction = createAction(
  CharacterListActionTypes.GET_CHARACTER_LIST_SUCCESS,
  props<{characterList: GetCharacterListResponseInterface}>()
);

export const getCharacterListFailureAction = createAction(
  CharacterListActionTypes.GET_CHARACTER_LIST_FAILURE,
  props<{error: BackendErrorInterface}>()
);
