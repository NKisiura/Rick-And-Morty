import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PaginationComponent} from "./components/pagination.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, RouterModule],
  providers: [],
  exports: [PaginationComponent]
})
export class PaginationModule { }
