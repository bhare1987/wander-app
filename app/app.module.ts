import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpModule } from "nativescript-angular/http";
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
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forRoot(AppRoutes)
    ],
    providers: [
        SideDrawerService
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
