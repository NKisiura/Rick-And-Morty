import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html'
})
export class CharacterDetailsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  private getSingleCharacter() {
    const characterId = this.getCharacterIdFromCurrentRoute();
  }

  private getCharacterIdFromCurrentRoute(): string {
    return this.router.url.split('/').filter(string => !!+string)[0];
  }
}
