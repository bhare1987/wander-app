"use strict";
var core_1 = require("@angular/core");
var sidedrawer_service_1 = require("../../shared/sidedrawer.service");
var HomeComponent = (function () {
    function HomeComponent(sideDrawerService) {
        this.sideDrawerService = sideDrawerService;
    }
    HomeComponent.prototype.toggleMenu = function () {
        this.sideDrawerService.toggleMenu();
    };
    HomeComponent.prototype.toggleSearch = function () {
        console.log("search!");
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "wander-home",
            templateUrl: "./components/home/home.component.html",
        }), 
        __metadata('design:paramtypes', [sidedrawer_service_1.SideDrawerService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map