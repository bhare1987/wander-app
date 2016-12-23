import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppRoutes, AppComponents } from "./app.routing";

import { AppComponent } from "./components/app.component";
import { SideDrawerService } from "./shared/sidedrawer.service";

@NgModule({
    declarations: [
        AppComponent,
        ...AppComponents,
        SIDEDRAWER_DIRECTIVES
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(AppRoutes)
    ],
    providers: [
        SideDrawerService
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
