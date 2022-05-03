import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html'
})
export class HeaderLogoComponent {
  @Input() public logoWithTitle: boolean = false;
}
