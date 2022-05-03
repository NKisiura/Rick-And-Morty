import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {faLongArrowLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-control-section',
  templateUrl: './control-section.component.html'
})
export class ControlSectionComponent {
  public iconLongArrowLeft = faLongArrowLeft
  @Input() public hasBackToCharacterListButton: boolean = false;

  constructor(private router: Router) {}

  public async navigateToCharacterList(): Promise<void> {
    await this.router.navigate(['characters'])
  }
}
