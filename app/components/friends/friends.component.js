"use strict";
var core_1 = require("@angular/core");
var sidedrawer_service_1 = require("../../shared/sidedrawer.service");
var frame_1 = require("ui/frame");
var FriendsComponent = (function () {
    function FriendsComponent(sideDrawerService) {
        this.sideDrawerService = sideDrawerService;
        this.friends = [];
    }
    FriendsComponent.prototype.ngOnInit = function () {
        this.controller = frame_1.topmost().ios.controller;
        this.navItem = this.controller.visibleViewController.navigationItem;
        this.navItem.setHidesBackButtonAnimated(true, false);
        this.friends.push({
            image: "~/assets/placeholder.jpg",
            name: "Brandon Hare"
        });
        this.friends.push({
            image: "~/assets/placeholder.jpg",
            name: "Nathan Hall"
        });
    };
    FriendsComponent.prototype.onFriendSelect = function (event) {
        console.log('event', event);
    };
    FriendsComponent.prototype.toggleMenu = function () {
        this.sideDrawerService.toggleMenu();
    };
    FriendsComponent = __decorate([
        core_1.Component({
            selector: "wander-friends",
            templateUrl: "./components/friends/friends.component.html",
            styleUrls: ["./components/friends/friends.component.css"]
        }), 
        __metadata('design:paramtypes', [sidedrawer_service_1.SideDrawerService])
    ], FriendsComponent);
    return FriendsComponent;
}());
exports.FriendsComponent = FriendsComponent;
//# sourceMappingURL=friends.component.js.map