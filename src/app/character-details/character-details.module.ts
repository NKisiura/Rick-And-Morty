import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CharacterDetailsComponent} from "./components/character-details/character-details.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {CharacterDetailsEffect} from "./store/effects/character-details.effect";
import {StoreModule} from "@ngrx/store";
import {CharacterDetailsService} from "./services/character-details.service";
import {characterDetailsReducers} from "./store/charcater-details-reducers";
import {ControlSectionModule} from "../global/modules/layouts/control-section/control-section.module";
import {LoadingModule} from "../global/modules/layouts/loading/loading.module";
import {BackendErrorMessageModule} from "../global/modules/layouts/backend-error-message/backend-error-message.module";
import {DetailCharacterComponent} from "./components/character/detail-character.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FirstEpisodeEffect} from "./store/effects/first-episode.effect";

const routes: Routes = [
  {
    path: 'character/:slug/:slug',
    component: CharacterDetailsComponent
  }
]

@NgModule({
  declarations: [CharacterDetailsComponent, DetailCharacterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    EffectsModule.forFeature([CharacterDetailsEffect, FirstEpisodeEffect]),
    StoreModule.forFeature('character-details', characterDetailsReducers),
    ControlSectionModule,
    LoadingModule,
    BackendErrorMessageModule,
    FontAwesomeModule
  ],
  providers: [CharacterDetailsService],
  exports: []
})
export class CharacterDetailsModule {}
