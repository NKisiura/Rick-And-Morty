import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PaginationComponent} from "./components/pagination.component";

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule],
  providers: [],
    exports: [
        PaginationComponent
    ]
})
export class PaginationModule { }
