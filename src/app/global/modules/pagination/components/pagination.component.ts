import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  @Input() public currentPage!: number;
  @Input() public pageCount!: number;
  @Input() public url!: string;
}
