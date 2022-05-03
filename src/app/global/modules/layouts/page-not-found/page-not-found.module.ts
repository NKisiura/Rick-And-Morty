import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./components/page-not-found.component";
import {ControlSectionModule} from "../control-section/control-section.module";
import {NotificationSectionModule} from "../notification-section/notification-section.module";

const routes: Routes = [
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ControlSectionModule, NotificationSectionModule],
  providers: [],
  exports: []
})
export class PageNotFoundModule { }
