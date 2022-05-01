import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {CharacterListComponent} from "./components/character-list/character-list.component";
import {HttpClientModule} from "@angular/common/http";
import {CharacterListService} from "./services/character-list.service";
import {CharacterListFilterComponent} from "./components/character-list-filter/character-list-filter.component";
import {CharacterComponent} from "./components/character/character.component";
import {PaginationModule} from "../global/modules/pagination/pagination.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store /get-character-list-reducers";
import {EffectsModule} from "@ngrx/effects";
import {GetCharacterListEffect} from "./store /get-character-list.effect";
import {LoadingModule} from "../global/modules/loading/loading.module";
import {BackendErrorMessageModule} from "../global/modules/backend-error-message/backend-error-message.module";

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
    FormsModule,
    EffectsModule.forFeature([GetCharacterListEffect]),
    StoreModule.forFeature('character-list', reducers),
    LoadingModule,
    BackendErrorMessageModule
  ],
  providers: [CharacterListService],
  exports: []
})
export class CharacterListModule { }
