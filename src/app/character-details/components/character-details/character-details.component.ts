import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {CharacterInterface} from "../../../global/types/character.interface";
import {BackendErrorInterface} from "../../../global/types/backend-error.interface";
import {select, Store} from "@ngrx/store";
import {
  singleCharacterErrorSelector,
  singleCharacterLoadingSelector,
  singleCharacterSelector
} from "../../store/character-details-selectors";
import {getSingleCharacterAction} from "../../store/character-details.action";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html'
})
export class CharacterDetailsComponent implements OnInit {

  public isCharacterLoading$ = new Observable<boolean>();
  public character$ = new Observable<CharacterInterface | null>();
  public characterError$ = new Observable<BackendErrorInterface | null>();

  constructor(
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initValues();
    this.getSingleCharacter();
  }

  private initValues(): void {
    this.isCharacterLoading$ = this.store.pipe(select(singleCharacterLoadingSelector));
    this.character$ = this.store.pipe(select(singleCharacterSelector));
    this.characterError$ = this.store.pipe(select(singleCharacterErrorSelector));
  }

  private getSingleCharacter(): void {
    const characterId = this.getCharacterIdFromCurrentRoute();
    this.store.dispatch(getSingleCharacterAction({id: characterId}));
  }

  private getCharacterIdFromCurrentRoute(): string {
    return this.router.url.split('/').filter(string => !!+string)[0];
  }
}
