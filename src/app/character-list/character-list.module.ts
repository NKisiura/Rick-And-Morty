import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {CharacterListComponent} from "./components/character-list/character-list.component";
import {HttpClientModule} from "@angular/common/http";
import {CharacterListService} from "./services/character-list.service";
import {CharacterListFilterComponent} from "./components/character-list-filter/character-list-filter.component";
import {CharacterComponent} from "./components/character/character.component";
import {PaginationModule} from "../global/modules/feature-components/pagination/pagination.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {characterListReducers} from "./store /character-list-reducers";
import {EffectsModule} from "@ngrx/effects";
import {GetCharacterListEffect} from "./store /character-list.effect";
import {LoadingModule} from "../global/modules/layouts/loading/loading.module";
import {BackendErrorMessageModule} from "../global/modules/layouts/backend-error-message/backend-error-message.module";
import {ButtonsModule} from "../global/modules/basic-components/buttons.module";
import {ControlSectionModule} from "../global/modules/layouts/control-section/control-section.module";

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
    StoreModule.forFeature('character-list', characterListReducers),
    LoadingModule,
    BackendErrorMessageModule,
    ButtonsModule,
    ControlSectionModule
  ],
  providers: [CharacterListService],
  exports: []
})
export class CharacterListModule { }
