"use strict";
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_service_1 = require("../shared/sidedrawer.service");
var AppComponent = (function () {
    function AppComponent(sideDrawerService) {
        this.sideDrawerService = sideDrawerService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.drawer = this.drawerComponent.sideDrawer;
        this.sideDrawerService.triggerMenu.subscribe(function (triggerMenu) { return _this.drawer.toggleDrawerState(); });
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent), 
        __metadata('design:type', angular_1.RadSideDrawerComponent)
    ], AppComponent.prototype, "drawerComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "wander-app",
            templateUrl: "./components/app.component.html"
        }), 
        __metadata('design:paramtypes', [sidedrawer_service_1.SideDrawerService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map