import {Component} from "@angular/core";
import {faCode} from "@fortawesome/free-solid-svg-icons/faCode";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  public codeIcon = faCode;
}
