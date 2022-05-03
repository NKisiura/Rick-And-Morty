import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import {HeaderLogoComponent} from "./components/header-logo/header-logo.component";
import {ThemeTogglerModule} from "../../theme-toggler/theme-toggler.module";

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLogoComponent
  ],
  imports: [
    CommonModule,
    ThemeTogglerModule
  ],
  providers: [],
  exports: [
      HeaderComponent
  ]
})
export class HeaderModule {}
