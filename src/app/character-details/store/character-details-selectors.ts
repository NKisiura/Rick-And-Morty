import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CharacterDetailsStateInterface} from "../types/character-details-state.interface";

export const characterDetailsFeatureSelector =
  createFeatureSelector<CharacterDetailsStateInterface>('character-details');

export const singleCharacterLoadingSelector = createSelector(
  characterDetailsFeatureSelector,
  (characterDetailsState: CharacterDetailsStateInterface) => characterDetailsState.isLoading
);

export const singleCharacterSelector = createSelector(
  characterDetailsFeatureSelector,
  (characterDetailsState: CharacterDetailsStateInterface) => characterDetailsState.character
);

export const firstEpisodeSelector = createSelector(
  characterDetailsFeatureSelector,
  (characterDetailsState: CharacterDetailsStateInterface) => characterDetailsState.firstEpisode
);

export const singleCharacterErrorSelector = createSelector(
  characterDetailsFeatureSelector,
  (characterDetailsState: CharacterDetailsStateInterface) => characterDetailsState.error
);
