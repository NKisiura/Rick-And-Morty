import {NgModule} from "@angular/core";
import {ControlSectionComponent} from "./components/control-section/control-section.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ControlSectionComponent],
  imports: [CommonModule],
  exports: [
    ControlSectionComponent
  ]
})
export class ControlSectionModule {}
