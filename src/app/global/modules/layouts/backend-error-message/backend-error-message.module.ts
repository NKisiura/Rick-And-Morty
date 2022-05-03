import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BackendErrorMessageComponent} from "./components/backend-error-message.component";
import {NotificationSectionModule} from "../notification-section/notification-section.module";

@NgModule({
  declarations: [BackendErrorMessageComponent],
  imports: [CommonModule, NotificationSectionModule],
  providers: [],
  exports: [
    BackendErrorMessageComponent
  ]
})
export class BackendErrorMessageModule {}
