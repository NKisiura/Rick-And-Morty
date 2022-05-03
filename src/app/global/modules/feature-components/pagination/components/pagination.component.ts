import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {ParsedUrl, parseUrl} from "query-string";
import {faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  public iconArrowLeft = faAngleLeft;
  public iconArrowLeftDouble = faAngleDoubleLeft;
  public iconArrowRight = faAngleRight;
  public iconArrowRightDouble = faAngleDoubleRight;

  @Input() public currentPage!: number;
  @Input() public pageCount!: number;

  constructor(private router: Router) { }

  public async navigateToPrevPage(): Promise<void> {
    await this.navigateToPage(this.currentPage - 1);
  }

  public async navigateToNextPage(): Promise<void> {
    await this.navigateToPage(this.currentPage + 1);
  }

  public async navigateToFirstPage(): Promise<void> {
    await this.navigateToPage(1);
  }

  public async navigateToLastPage(): Promise<void> {
    await this.navigateToPage(this.pageCount);
  }

  private async navigateToPage(newPage: number): Promise<void> {
    const parsedUrl: ParsedUrl = parseUrl(this.router.url);
    await this.router.navigate(
      [parsedUrl.url],
      {queryParams: {...parsedUrl.query, page: newPage}}
    )
  }
}
