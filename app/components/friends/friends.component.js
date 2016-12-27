"use strict";
var core_1 = require("@angular/core");
var frame_1 = require("ui/frame");
var sidedrawer_service_1 = require("../../shared/sidedrawer.service");
var FriendsComponent = (function () {
    function FriendsComponent(sideDrawerService) {
        this.sideDrawerService = sideDrawerService;
    }
    FriendsComponent.prototype.ngOnInit = function () {
        this.controller = frame_1.topmost().ios.controller;
        this.navItem = this.controller.visibleViewController.navigationItem;
        this.navItem.setHidesBackButtonAnimated(true, false);
    };
    FriendsComponent.prototype.toggleMenu = function () {
        this.sideDrawerService.toggleMenu();
    };
    FriendsComponent = __decorate([
        core_1.Component({
            selector: "wander-friends",
            templateUrl: "./components/friends/friends.component.html",
        }), 
        __metadata('design:paramtypes', [sidedrawer_service_1.SideDrawerService])
    ], FriendsComponent);
    return FriendsComponent;
}());
exports.FriendsComponent = FriendsComponent;
//# sourceMappingURL=friends.component.js.map