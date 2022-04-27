import {Component, EventEmitter, Output} from "@angular/core";
import {CharacterAliveStatusTypes, CharacterGenderTypes} from "../../../global/types/character.interface";
import {CharacterListFilterInterface} from "../../types/character-list-filter.interface";

@Component({
  selector: 'app-character-list-filter',
  templateUrl: './character-list-filter.component.html'
})
export class CharacterListFilterComponent {
  public characterAliveStatusTypes: CharacterAliveStatusTypes[] = ['Alive', 'Dead', 'unknown'];
  public characterGenderTypes: CharacterGenderTypes[] = ['Female', 'Male', 'Genderless', 'unknown'];
  public characterListFilter: CharacterListFilterInterface = {};
  @Output() private onCharacterListFilterChange: EventEmitter<CharacterListFilterInterface> = new EventEmitter<CharacterListFilterInterface>();

  public emitCharacterListFilter(): void {
    this.onCharacterListFilterChange.emit(this.characterListFilter);
  }

  public resetCharacterListFilter(): void {
    this.characterListFilter = {};
    this.emitCharacterListFilter();
  }
}
