"use strict";
var core_1 = require('@angular/core');
var sidedrawer_service_1 = require("../../shared/sidedrawer.service");
var element_registry_1 = require('nativescript-angular/element-registry');
element_registry_1.registerElement("MapView", function () { return require("nativescript-google-maps-sdk").MapView; });
var HomeComponent = (function () {
    function HomeComponent(sideDrawerService) {
        this.sideDrawerService = sideDrawerService;
        //Map events
        this.onMapReady = function (event) {
            console.log("Map Ready");
        };
    }
    HomeComponent.prototype.toggleMenu = function () {
        this.sideDrawerService.toggleMenu();
    };
    HomeComponent.prototype.toggleSearch = function () {
        console.log("search!");
    };
    __decorate([
        core_1.ViewChild("MapView"), 
        __metadata('design:type', core_1.ElementRef)
    ], HomeComponent.prototype, "mapView", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "wander-home",
            templateUrl: "./components/home/home.component.html",
            styleUrls: ["./components/home/home.component.css"]
        }), 
        __metadata('design:paramtypes', [sidedrawer_service_1.SideDrawerService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map