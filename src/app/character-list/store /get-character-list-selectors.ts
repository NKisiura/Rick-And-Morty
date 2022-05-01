import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CharacterListStateInterface} from "../types/character-list-state.interface";

export const characterListFeatureSelector =
  createFeatureSelector<CharacterListStateInterface>('character-list');

export const isLoadingSelector = createSelector(
  characterListFeatureSelector,
  (characterListState: CharacterListStateInterface) => characterListState.isLoading
);

export const characterListSelector = createSelector(
  characterListFeatureSelector,
  (characterListState: CharacterListStateInterface) => characterListState.data
);

export const errorSelector = createSelector(
  characterListFeatureSelector,
  (characterListState: CharacterListStateInterface) => characterListState.error
);
