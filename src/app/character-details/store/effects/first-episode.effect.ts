import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CharacterDetailsService} from "../../services/character-details.service";
import {Injectable} from "@angular/core";
import {
  getFirstEpisodeAction,
  getFirstEpisodeFailureAction,
  getFirstEpisodeSuccessAction
} from "../actions/first-episode.action";
import {catchError, map, of, switchMap} from "rxjs";
import {EpisodeInterface} from "../../types/episode.interface";
import {BackendErrorInterface} from "../../../global/types/backend-error.interface";

@Injectable()
export class FirstEpisodeEffect {

  public getFirstEpisode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFirstEpisodeAction),
      switchMap(({id}) => {
        return this.characterDetailsService.getCharacterFirstEpisode(id).pipe(
          map((firstEpisode: EpisodeInterface) => getFirstEpisodeSuccessAction({firstEpisode})),
          catchError((error: BackendErrorInterface) => of(getFirstEpisodeFailureAction({error})))
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private characterDetailsService: CharacterDetailsService
  ) { }
}
