import {Routes} from '@angular/router';

export const ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        canActivate: [],
        canActivateChild: [],
        redirectTo: '',
        pathMatch: 'full'
    }
];
