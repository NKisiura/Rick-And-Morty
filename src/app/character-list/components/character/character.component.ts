import {Component, Input} from "@angular/core";
import {CharacterInterface} from "../../../global/types/character.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html'
})
export class CharacterComponent {
  @Input() public character!: CharacterInterface;

  constructor(private router: Router) {}

  public async navigateToCharacterDetails(): Promise<void> {
    await this.router.navigate(
      ['character', this.character.id, this.character.name.split(' ').join('-')],
    )
  }
}
