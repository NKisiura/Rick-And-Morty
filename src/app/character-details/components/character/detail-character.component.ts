import {Component, Input} from "@angular/core";
import {CharacterInterface} from "../../../global/types/character.interface";
import {
  faClapperboard,
  faDna, faGlobe,
  faHeartPulse,
  faPersonHalfDress,
  faRobot,
  faVideo
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html'
})
export class DetailCharacterComponent {
  public aliveIcon = faHeartPulse;
  public genderIcon = faPersonHalfDress;
  public speciesIcon = faRobot;
  public typeIcon = faDna;
  public seenCountIcon = faClapperboard;
  public firstSeenIcon = faVideo;
  public locationIcon = faGlobe

  @Input() public character!: CharacterInterface;
}
