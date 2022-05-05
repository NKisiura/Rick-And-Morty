import {createAction, props} from "@ngrx/store";
import {CharacterDetailsActionTypes} from "../character-details-action-types";
import {EpisodeInterface} from "../../types/episode.interface";
import {BackendErrorInterface} from "../../../global/types/backend-error.interface";

export const getFirstEpisodeAction = createAction(
  CharacterDetailsActionTypes.GET_FIRST_EPISODE,
  props<{id: number}>()
);

export const getFirstEpisodeSuccessAction = createAction(
  CharacterDetailsActionTypes.GET_FIRST_EPISODE_SUCCESS,
  props<{firstEpisode: EpisodeInterface}>()
);

export const getFirstEpisodeFailureAction = createAction(
  CharacterDetailsActionTypes.GET_FIRST_EPISODE_FAILURE,
  props<{error: BackendErrorInterface}>()
);
