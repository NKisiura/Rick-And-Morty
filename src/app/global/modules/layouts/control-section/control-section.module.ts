import {NgModule} from "@angular/core";
import {ControlSectionComponent} from "./components/control-section/control-section.component";
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [ControlSectionComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    ControlSectionComponent
  ]
})
export class ControlSectionModule {}
