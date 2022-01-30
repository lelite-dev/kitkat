import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

const HOME_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(HOME_ROUTES)
    ],
    providers: []
})
export class HomeModule {}
