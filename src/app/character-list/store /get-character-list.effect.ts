import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CharacterListService} from "../services/character-list.service";
import {
  getCharacterListAction,
  getCharacterListFailureAction,
  getCharacterListSuccessAction
} from "./get-character-list.action";
import {catchError, map, of, switchMap} from "rxjs";
import {GetCharacterListResponseInterface} from "../types/get-character-list-response.interface";
import {BackendErrorInterface} from "../../global/types/backend-error.interface";

@Injectable()
export class GetCharacterListEffect {

  public getCharacterList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCharacterListAction),
      switchMap(({url}) => {
        return this.characterListService.getCharacterList(url).pipe(
          map((characterList: GetCharacterListResponseInterface) => getCharacterListSuccessAction({characterList})),
          catchError((error: BackendErrorInterface) => of(getCharacterListFailureAction({error})))
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private characterListService: CharacterListService
  ) { }
}
