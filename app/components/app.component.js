"use strict";
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_service_1 = require("../shared/sidedrawer.service");
var AppComponent = (function () {
    function AppComponent(router, sideDrawerService) {
        var _this = this;
        this.router = router;
        this.sideDrawerService = sideDrawerService;
        this.sideDrawerService.triggerMenu.subscribe(function (triggerMenu) { return _this.toggleDrawer(); });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.drawer = this.drawerComponent.sideDrawer;
        this.drawer.ios.attachDrawerToWindow();
        this.router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationEnd) {
                _this.drawer.closeDrawer();
            }
        });
    };
    AppComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent), 
        __metadata('design:type', angular_1.RadSideDrawerComponent)
    ], AppComponent.prototype, "drawerComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "wander-app",
            templateUrl: "./components/app.component.html",
            styleUrls: ["./components/app.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, sidedrawer_service_1.SideDrawerService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map