import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListModule } from "./character-list/character-list.module";
import { PageNotFoundModule } from "./global/modules/layouts/page-not-found/page-not-found.module";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CharacterDetailsModule} from "./character-details/character-details.module";
import {HeaderModule} from "./global/modules/layouts/header/header.module";
import {TimeService} from "./global/services/time.service";
import {FooterModule} from "./global/modules/layouts/footer/footer.module";
import {LocalStorageService} from "./global/services/local-storage.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharacterDetailsModule,
    CharacterListModule,
    PageNotFoundModule,
    StoreModule.forRoot({router: routerReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    HeaderModule,
    FooterModule
  ],
  providers: [TimeService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
