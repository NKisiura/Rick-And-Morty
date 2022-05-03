import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./components/footer.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations:[FooterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule {

}
