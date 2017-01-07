"use strict";
var core_1 = require('@angular/core');
var sidedrawer_service_1 = require("../../shared/sidedrawer.service");
var HelpComponent = (function () {
    function HelpComponent(sideDrawerService) {
        this.sideDrawerService = sideDrawerService;
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent.prototype.toggleMenu = function () {
        this.sideDrawerService.toggleMenu();
    };
    HelpComponent = __decorate([
        core_1.Component({
            selector: 'wander-help',
            templateUrl: './components/help/help.component.html',
            styleUrls: ['./components/help/help.component.css']
        }), 
        __metadata('design:paramtypes', [sidedrawer_service_1.SideDrawerService])
    ], HelpComponent);
    return HelpComponent;
}());
exports.HelpComponent = HelpComponent;
//# sourceMappingURL=help.component.js.map