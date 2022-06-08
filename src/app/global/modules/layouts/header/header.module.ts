import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import {HeaderLogoComponent} from "./components/header-logo/header-logo.component";
import {ThemeTogglerModule} from "../../feature-components/theme-toggler/theme-toggler.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLogoComponent
  ],
  imports: [
    CommonModule,
    ThemeTogglerModule,
    RouterModule
  ],
  providers: [],
  exports: [
      HeaderComponent
  ]
})
export class HeaderModule {}
