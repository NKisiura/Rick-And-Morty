import {Component, OnDestroy, OnInit} from "@angular/core";
import {CharacterListFilterInterface} from "../../types/character-list-filter.interface";
import {Observable, Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {API_CHARACTER_URL} from "../../../global/constants/api-constants";
import {parse, ParsedQuery, ParsedUrl, parseUrl, stringify} from "query-string";
import {select, Store} from "@ngrx/store";
import {getCharacterListAction} from "../../store /get-character-list.action";
import {GetCharacterListResponseInterface} from "../../types/get-character-list-response.interface";
import {characterListSelector, errorSelector, isLoadingSelector} from "../../store /get-character-list-selectors";
import {BackendErrorInterface} from "../../../global/types/backend-error.interface";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent implements OnInit, OnDestroy {
  private ngDestroy: Subject<void> = new Subject<void>();

  public currentPage!: number;

  public isCharacterListLoading$ = new Observable<boolean>();
  public characterListData$ = new Observable<GetCharacterListResponseInterface | null>();
  public characterListError$ = new Observable<BackendErrorInterface | null>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initValues();
    this.initListeners();
  }

  ngOnDestroy(): void {
    this.ngDestroy.next();
    this.ngDestroy.complete();
  }

  private initValues(): void {
    this.isCharacterListLoading$ = this.store.pipe(select(isLoadingSelector));
    this.characterListData$ = this.store.pipe(select(characterListSelector));
    this.characterListError$ = this.store.pipe(select(errorSelector));
  }

  private initListeners(): void {
    this.route.queryParams
      .pipe(takeUntil(this.ngDestroy))
      .subscribe((params: Params) => {
        this.currentPage = +params['page'] || 1;
        this.getCharacterList();
      })
  }

  public async getCharacterListByFilter(filter: CharacterListFilterInterface): Promise<void> {
    const parsedUrl: ParsedUrl = parseUrl(this.router.url);
    const params: ParsedQuery = parse(stringify(filter, {skipNull: true, skipEmptyString: true}));
    await this.router.navigate([parsedUrl.url], {queryParams: params});
  }

  private getCharacterList(): void {
    const parsedUrl: ParsedUrl = parseUrl(this.router.url);
    const paramsString = stringify(parsedUrl.query);
    const fullUrl = paramsString ? API_CHARACTER_URL + '?' + paramsString : API_CHARACTER_URL;
    this.store.dispatch(getCharacterListAction({url: fullUrl}))
  }
}
