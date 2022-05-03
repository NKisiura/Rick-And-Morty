import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PaginationComponent} from "./components/pagination.component";
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  providers: [],
  exports: [PaginationComponent]
})
export class PaginationModule { }
