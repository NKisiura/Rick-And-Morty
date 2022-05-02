import {createAction, props} from "@ngrx/store";
import {CharacterDetailsActionTypes} from "./character-details-action-types";
import {CharacterInterface} from "../../global/types/character.interface";
import {BackendErrorInterface} from "../../global/types/backend-error.interface";

export const getSingleCharacterAction = createAction(
  CharacterDetailsActionTypes.GET_SINGLE_CHARACTER,
  props<{id: string}>()
);

export const getSingleCharacterSuccessAction = createAction(
  CharacterDetailsActionTypes.GET_SINGLE_CHARACTER_SUCCESS,
  props<{character: CharacterInterface}>()
);

export const getSingleCharacterFailureAction = createAction(
  CharacterDetailsActionTypes.GET_SINGLE_CHARACTER_FAILURE,
  props<{error: BackendErrorInterface}>()
);
