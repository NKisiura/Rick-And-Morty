import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ThemeTogglerComponent} from "./components/theme-toggler.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [ThemeTogglerComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  providers: [],
  exports: [
    ThemeTogglerComponent
  ]
})
export class ThemeTogglerModule {}
