import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        RouterStoreModule,
    ],
    providers: [
        RouterGuardNotfound,
    ],
    exports: [RouterModule]
})
export class CoreRoutingModule {
}
