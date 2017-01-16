"use strict";
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
var http_1 = require("nativescript-angular/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./components/app.component");
var sidedrawer_service_1 = require("./shared/sidedrawer.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ].concat(app_routing_1.AppComponents, [
                angular_1.SIDEDRAWER_DIRECTIVES
            ]),
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_1.NativeScriptModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                forms_1.NativeScriptFormsModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.AppRoutes)
            ],
            providers: [
                sidedrawer_service_1.SideDrawerService
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map