"use strict";
var core_1 = require('@angular/core');
var sidedrawer_service_1 = require("../../shared/sidedrawer.service");
var SettingsComponent = (function () {
    function SettingsComponent(sideDrawerService) {
        this.sideDrawerService = sideDrawerService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.toggleMenu = function () {
        this.sideDrawerService.toggleMenu();
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'wander-settings',
            templateUrl: './components/settings/settings.component.html',
            styleUrls: ['./components/settings/settings.component.css']
        }), 
        __metadata('design:paramtypes', [sidedrawer_service_1.SideDrawerService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map