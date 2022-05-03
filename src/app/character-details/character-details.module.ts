import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CharacterDetailsComponent} from "./components/character-details/character-details.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {CharacterDetailsEffect} from "./store/character-details.effect";
import {StoreModule} from "@ngrx/store";
import {CharacterDetailsService} from "./services/character-details.service";
import {characterDetailsReducers} from "./store/charcater-details-reducers";
import {ControlSectionModule} from "../global/modules/layouts/control-section/control-section.module";

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
        RouterModule.forChild(routes),
        HttpClientModule,
        EffectsModule.forFeature([CharacterDetailsEffect]),
        StoreModule.forFeature('character-details', characterDetailsReducers),
        ControlSectionModule
    ],
  providers: [CharacterDetailsService],
  exports: []
})
export class CharacterDetailsModule {

}
