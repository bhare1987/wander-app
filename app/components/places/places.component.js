"use strict";
var core_1 = require('@angular/core');
var sidedrawer_service_1 = require("../../shared/sidedrawer.service");
var PlacesComponent = (function () {
    function PlacesComponent(sideDrawerService) {
        this.sideDrawerService = sideDrawerService;
    }
    PlacesComponent.prototype.ngOnInit = function () {
    };
    PlacesComponent.prototype.toggleMenu = function () {
        this.sideDrawerService.toggleMenu();
    };
    PlacesComponent = __decorate([
        core_1.Component({
            selector: 'wander-places',
            templateUrl: './components/places/places.component.html',
            styleUrls: ['./components/places/places.component.css']
        }), 
        __metadata('design:paramtypes', [sidedrawer_service_1.SideDrawerService])
    ], PlacesComponent);
    return PlacesComponent;
}());
exports.PlacesComponent = PlacesComponent;
//# sourceMappingURL=places.component.js.map