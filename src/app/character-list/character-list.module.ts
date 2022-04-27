import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {CharacterListComponent} from "./components/character-list/character-list.component";
import {HttpClientModule} from "@angular/common/http";
import {GetCharacterListService} from "./services/get-character-list.service";
import {CharacterListFilterComponent} from "./components/character-list-filter/character-list-filter.component";
import {CharacterComponent} from "./components/character/character.component";
import {PaginationModule} from "../global/modules/pagination/pagination.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";

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
    CharacterComponent,
    CharacterListComponent,
    CharacterListFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    PaginationModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [GetCharacterListService],
  exports: []
})
export class CharacterListModule { }
