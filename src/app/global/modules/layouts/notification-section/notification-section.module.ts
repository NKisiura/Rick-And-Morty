import {NgModule} from "@angular/core";
import {NotificationSectionComponent} from "./components/notification-section/notification-section.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [NotificationSectionComponent],
  imports: [CommonModule],
  exports: [
    NotificationSectionComponent
  ]
})
export class NotificationSectionModule {}
