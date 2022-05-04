import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoadingComponent} from "./components/loading.component";
import {NotificationSectionModule} from "../notification-section/notification-section.module";

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, NotificationSectionModule],
  providers: [],
  exports: [
    LoadingComponent
  ]
})
export class LoadingModule {}
