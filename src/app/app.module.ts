import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {AppRouteModule} from './routing/app-route.module';
import {TopbarModule} from '../components/topbar/topbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRouteModule,
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        EffectsModule.forRoot([]),

        /** components **/
        TopbarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
