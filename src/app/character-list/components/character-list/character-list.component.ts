import {Component, OnDestroy, OnInit} from "@angular/core";
import {CharacterListFilterInterface} from "../../types/character-list-filter.interface";
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";

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

  ngOnInit() {
    this.route.queryParams
      .pipe(takeUntil(this.ngDestroy))
      .subscribe((params: Params) => {
        this.currentPage = +params['page'] || 1;
      })
  }

  ngOnDestroy() {
    this.ngDestroy.next();
    this.ngDestroy.complete();
  }

  public getCharacterListByFilter(filter: CharacterListFilterInterface) {
    console.log(filter);
  }
}
