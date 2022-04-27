import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {CharacterListComponent} from "./components/character-list/character-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    component: CharacterListComponent
  }
]

@NgModule({
  declarations: [
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: []
})
export class CharacterListModule { }
