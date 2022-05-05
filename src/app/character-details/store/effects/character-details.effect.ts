import {Injectable} from "@angular/core";
import {CharacterDetailsService} from "../../services/character-details.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  getSingleCharacterAction,
  getSingleCharacterFailureAction,
  getSingleCharacterSuccessAction
} from "../actions/character-details.action";
import {catchError, map, of, switchMap} from "rxjs";
import {CharacterInterface} from "../../../global/types/character.interface";
import {BackendErrorInterface} from "../../../global/types/backend-error.interface";

@Injectable()
export class CharacterDetailsEffect {

  public getSingleCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSingleCharacterAction),
      switchMap(({id}) => {
        return this.characterDetailsService.getSingleCharacter(id).pipe(
          map((character: CharacterInterface) => getSingleCharacterSuccessAction({character})),
          catchError((error: BackendErrorInterface) => of(getSingleCharacterFailureAction({error})))
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private characterDetailsService: CharacterDetailsService
  ) {}
}
