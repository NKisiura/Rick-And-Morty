import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoadingComponent} from "./components/loading.component";

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule],
  providers: [],
  exports: [
    LoadingComponent
  ]
})
export class LoadingModule {}
