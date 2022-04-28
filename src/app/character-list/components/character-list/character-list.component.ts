import {Component, OnDestroy, OnInit} from "@angular/core";
import {CharacterListFilterInterface} from "../../types/character-list-filter.interface";
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {API_CHARACTER_URL} from "../../../global/constants/api-constants";
import {parse, ParsedQuery, ParsedUrl, parseUrl, stringify} from "query-string";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent implements OnInit, OnDestroy {
  private ngDestroy: Subject<void> = new Subject<void>();

  public currentPage!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntil(this.ngDestroy))
      .subscribe((params: Params) => {
        this.currentPage = +params['page'] || 1;
        this.getCharacterList();
      })
  }

  ngOnDestroy(): void {
    this.ngDestroy.next();
    this.ngDestroy.complete();
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
  }
}
