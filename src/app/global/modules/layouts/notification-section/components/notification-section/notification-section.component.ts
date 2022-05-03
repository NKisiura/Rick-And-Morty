import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-notification-section',
  templateUrl: './notification-section.component.html'
})
export class NotificationSectionComponent {
  @Input() public notificationMessage: string = '';
}
