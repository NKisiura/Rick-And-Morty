import {Component, OnDestroy, OnInit} from "@angular/core";
import {Params, Router} from "@angular/router";
import {Observable, skip, Subject, takeUntil} from "rxjs";
import {CharacterInterface} from "../../../global/types/character.interface";
import {BackendErrorInterface} from "../../../global/types/backend-error.interface";
import {select, Store} from "@ngrx/store";
import {
  firstEpisodeSelector,
  singleCharacterErrorSelector,
  singleCharacterLoadingSelector,
  singleCharacterSelector
} from "../../store/character-details-selectors";
import {getSingleCharacterAction} from "../../store/actions/character-details.action";
import {EpisodeInterface} from "../../types/episode.interface";
import {getFirstEpisodeAction} from "../../store/actions/first-episode.action";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html'
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {
  private ngDestroy: Subject<void> = new Subject<void>();

  public isCharacterLoading$ = new Observable<boolean>();
  public character$ = new Observable<CharacterInterface | null>();
  public firstEpisode$ = new Observable<EpisodeInterface | null>();
  public characterError$ = new Observable<BackendErrorInterface | null>();

  public previousNavigationParams: Params;

  constructor(
    private router: Router,
    private store: Store
  ) {
    this.previousNavigationParams = this.getPreviousNavigationQueryParams();
  }

  ngOnInit(): void {
    this.initValues();
    this.initListeners();
    this.getSingleCharacter();
  }

  ngOnDestroy(): void {
    this.ngDestroy.next();
    this.ngDestroy.complete();
  }

  private initValues(): void {
    this.isCharacterLoading$ = this.store.pipe(select(singleCharacterLoadingSelector));
    this.character$ = this.store.pipe(select(singleCharacterSelector));
    this.characterError$ = this.store.pipe(select(singleCharacterErrorSelector));
    this.firstEpisode$ = this.store.pipe(select(firstEpisodeSelector));
  }

  private initListeners(): void {
    this.character$
      .pipe(takeUntil(this.ngDestroy), skip(1))
      .subscribe((character: CharacterInterface | null) => {
        if (character) this.store.dispatch(getFirstEpisodeAction({id: CharacterDetailsComponent.getFirstEpisodeIdFromCharacter(character)}));
      })
  }

  private getSingleCharacter(): void {
    const characterId = this.getCharacterIdFromCurrentRoute();
    this.store.dispatch(getSingleCharacterAction({id: characterId}));
  }

  private getCharacterIdFromCurrentRoute(): number {
    return CharacterDetailsComponent.getIdFromUrl(this.router.url);
  }

  private getPreviousNavigationQueryParams(): Params {
    return this.router.getCurrentNavigation()?.previousNavigation?.extras.queryParams || {};
  }

  private static getFirstEpisodeIdFromCharacter(character: CharacterInterface): number {
    return CharacterDetailsComponent.getIdFromUrl(character.episode[0]);
  }

  private static getIdFromUrl(url: string): number {
    return +url.split('/').filter(string => !!+string)[0];
  }
}
