import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./components/page-not-found.component";

const routes: Routes = [
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  exports: []
})
export class PageNotFoundModule { }
