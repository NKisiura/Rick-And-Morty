import {Component, EventEmitter, OnDestroy, OnInit, Output} from "@angular/core";
import {CharacterAliveStatusTypes, CharacterGenderTypes} from "../../../global/types/character.interface";
import {CharacterListFilterInterface} from "../../types/character-list-filter.interface";
import {debounce} from "lodash";
import {ActivatedRoute, Router} from "@angular/router";
import {ParsedQuery, parseUrl, pick} from "query-string";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-character-list-filter',
  templateUrl: './character-list-filter.component.html'
})
export class CharacterListFilterComponent implements OnInit, OnDestroy {
  private ngDestroy: Subject<void> = new Subject<void>();
  public characterAliveStatusTypes: CharacterAliveStatusTypes[] = ['Alive', 'Dead', 'unknown'];
  public characterGenderTypes: CharacterGenderTypes[] = ['Female', 'Male', 'Genderless', 'unknown'];
  public characterListFilter: CharacterListFilterInterface = {name: null, status: null, gender: null};
  @Output() private onCharacterListFilterChange: EventEmitter<CharacterListFilterInterface> = new EventEmitter<CharacterListFilterInterface>();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntil(this.ngDestroy))
      .subscribe(() => this.setFilterPropertyFromUrl());
  }

  ngOnDestroy(): void {
    this.ngDestroy.next();
    this.ngDestroy.complete();
  }

  private setFilterPropertyFromUrl(): void {
    const filterKeys: string[] = Object.keys(this.characterListFilter);
    const queryParams: ParsedQuery = parseUrl(pick(this.router.url, filterKeys)).query;
    this.characterListFilter = {name: null, status: null, gender: null};
    this.characterListFilter = {...this.characterListFilter, ...queryParams};
  }

  public emitCharacterListFilter(): void {
    this.onCharacterListFilterChange.emit(this.characterListFilter);
  }

  public debounceEmitCharacterListFilter = debounce((): void => {
    this.emitCharacterListFilter();
  }, 600);

  public resetCharacterListFilter(): void {
    this.characterListFilter = {name: null, status: null, gender: null};
    this.emitCharacterListFilter();
  }
}
