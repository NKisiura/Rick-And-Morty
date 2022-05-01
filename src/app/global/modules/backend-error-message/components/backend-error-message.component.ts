import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-backend-error-message',
  templateUrl: './backend-error-message.component.html'
})
export class BackendErrorMessageComponent {
  @Input() public errorMessage: string = 'Oops! Something went wrong'
}
