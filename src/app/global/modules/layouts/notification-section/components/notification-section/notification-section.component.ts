import {Component, Input} from "@angular/core";
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";

@Component({
  selector: 'app-notification-section',
  templateUrl: './notification-section.component.html'
})
export class NotificationSectionComponent {
  public spinnerIcon = faSpinner;
  @Input() public notificationMessage: string = '';
  @Input() public spinner: boolean = false;
}
