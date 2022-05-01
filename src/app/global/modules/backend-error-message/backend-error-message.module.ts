import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BackendErrorMessageComponent} from "./components/backend-error-message.component";

@NgModule({
  declarations: [BackendErrorMessageComponent],
  imports: [CommonModule],
  providers: [],
  exports: [
    BackendErrorMessageComponent
  ]
})
export class BackendErrorMessageModule {}
