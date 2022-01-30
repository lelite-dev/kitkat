import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {ROUTES} from './app-route';
import {metaReducers, reducers} from '../store/reducers';

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES),
        StoreModule.forRoot(reducers, {
            metaReducers
        }),
        StoreRouterConnectingModule.forRoot()
    ],
    providers: [],
    exports: [
        RouterModule,
        StoreRouterConnectingModule
    ]
})
export class AppRouteModule {}
