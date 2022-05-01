import {Component, Input} from "@angular/core";
import {CharacterInterface} from "../../../global/types/character.interface";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html'
})
export class CharacterComponent {
  @Input() public character!: CharacterInterface;
}
