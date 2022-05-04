import {NgModule} from "@angular/core";
import {NotificationSectionComponent} from "./components/notification-section/notification-section.component";
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [NotificationSectionComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    NotificationSectionComponent
  ]
})
export class NotificationSectionModule {}
