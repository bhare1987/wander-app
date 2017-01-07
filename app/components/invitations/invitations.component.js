"use strict";
var core_1 = require('@angular/core');
var sidedrawer_service_1 = require("../../shared/sidedrawer.service");
var InvitationsComponent = (function () {
    function InvitationsComponent(sideDrawerService) {
        this.sideDrawerService = sideDrawerService;
    }
    InvitationsComponent.prototype.ngOnInit = function () {
    };
    InvitationsComponent.prototype.toggleMenu = function () {
        this.sideDrawerService.toggleMenu();
    };
    InvitationsComponent = __decorate([
        core_1.Component({
            selector: 'wander-invitations',
            templateUrl: './components/invitations/invitations.component.html',
            styleUrls: ['./components/invitations/invitations.component.css']
        }), 
        __metadata('design:paramtypes', [sidedrawer_service_1.SideDrawerService])
    ], InvitationsComponent);
    return InvitationsComponent;
}());
exports.InvitationsComponent = InvitationsComponent;
//# sourceMappingURL=invitations.component.js.map