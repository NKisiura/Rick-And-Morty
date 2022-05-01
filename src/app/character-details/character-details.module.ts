import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CharacterDetailsComponent} from "./components/character-details/character-details.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'character/:slug/:slug',
    component: CharacterDetailsComponent
  }
]

@NgModule({
  declarations: [CharacterDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: []
})
export class CharacterDetailsModule {

}
